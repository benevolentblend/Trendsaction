const captureDate = /Statement\sFor\n([0-1][0-9])\/[0-3][0-9]\/([0-9]{4})\s-\s[0-1][0-9]\/[0-3][0-9]\/[0-9]{4}/;
const captureAccounts = /(.*)ID\s([0-9]{4})\$?([0-9,]{1,}\.[0-9]{2})\n/gm;
const captureBalanceTotal = /Account\sBalance\sTotal\n\$?(.*)\n/;
const captureDividendsTotal = /Total\sDividends\sPaid\sYear-To-Date\$?([0-9]{1,}\.[0-9]{2})\n/;

const replaceWithBlanks = [
  /^(.*)Total\sDividends\sPaid\sYear-To-Date\$?([0-9]{1,}\.[0-9]{2})/ms,
  /\$/gm,
  /Need a Loan\?\nCall \(717\) 232-3526 or apply online\nwww\.belco\.org\n/gm,
  /449 Eisenhower.*\n/gm,
  /Thank you for your membership.\n/gm,
  /BELCO Service Telephone Numbers.*advertisement for the property or services./ms,
  /Your Account Balances.*Year-To-Date[0-9]{1,}\.[0-9]{2}/ms,
  /Member\sNumber\n.*\nStatement\sFor\n(?:.*\n){3}/gm,
  /Statement of Account\n(.*)\nContinued fromprevious page\.\n/gm,
  /Posting\nTransactionBalanceTransaction Description\n/gm,
  /Statement of Account/,
  /Summary by Check Number\* Asterisk.*$/ms,
  /Overdraft Fees.*$/ms,
  /,/gm,
];

const replaceWithNewLines = [
  /\n(?:[0-9]\n|-\n|[SD]\n)+/gm,
  /RETURN SERVICE REQUESTED\n(?:.*\n){5}/gm,
  /Continued on next page./gm,
  " \n",
  "\n\n\n\n\n",
];

interface ReplacementStep {
  regex: RegExp | string;
  replacement: string;
}

interface Account {
  name: string;
  id: string;
  balance: number;
  amount?:number;
}

interface Transaction {
  balance: number;
  amount: number;
  date: string;
  type: "Withdrawal" | "Deposit";
  description: string;
}

interface CondensedTransaction {
  withdrawal: number;
  deposit: number;
  date: string;
}

interface ProcessedAccount extends Account {
  transactions: Transaction[];
  condenseTransactions: CondensedTransaction[];
}

const formatTransactionTables: ReplacementStep[] = [
  {
    regex: /(.*)ID ([0-9]{4})\nBeginning Balance/gm,
    replacement: "\n\n;:;$1;$2;Beginning Balance",
  },
  {
    regex: /Beginning Balance.+?Ending Balance\n([0-9,]{1,}\.[0-9]{2})/gms,
    replacement: "$1",
  },
];

const formatTransations = [
  {
    regex: /\n([0-9]{2}\/[0-9]{2})([0-9,]{1,}\.[0-9]{2})(-?)([0-9,]{1,}\.[0-9]{2})(-?)\s*(Withdrawal|Deposit)\s(.*)/gm,
    replacement: "\n\n$1;$3$2;$5$4;$6;$7",
  },
  {
    regex: /\n([0-9]{2}\/[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(Withdrawal|Deposit);(.*\n.*)/gm,
    replacement: "\n$1;$2;$3;$4;$5",
  },
  {
    regex: /\n([0-9]{2}\/[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(Withdrawal|Deposit);(.*)\n(.*)/gm,
    replacement: "\n$1;$2;$3;$4;$5 $6;",
  },
  {
    regex: /\n\n\n/gm,
    replacement: "\n",
  },
  {
    regex: /\n\n/gm,
    replacement: "\n",
  },
  {
    regex: / ;\n/gm,
    replacement: ";\n",
  },
  {
    regex: /\n\n;/,
    replacement: ";",
  },
];

const processAccount = /;:;(.*);([0-9]{4});(-?[0-9,]{1,}\.[0-9]{2})/;
const processTransaction = /([0-9]{2}\/[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(-?[0-9,]{1,}\.[0-9]{2});(Withdrawal|Deposit);(.*);/;

const processRegexSteps = (data: string, steps: ReplacementStep[]) => {
  let output = data;
  steps.forEach(step => {
    const { regex, replacement } = step;
    output = output.replace(regex, replacement);
  });

  return output;
};

const captureHeaderAccounts = (account: string): Account => {
  // Reset regex pointer
  captureAccounts.lastIndex = 0;
  const results = captureAccounts.exec(account);
  const [, name, id, balance] = results;
  const result = { name, id, balance: +balance.replace(",", "") };
  return result;
};

export const captureData = (rawData:string) => {
  const dateInformation = captureDate.exec(rawData);
  const accountRegs = rawData.match(captureAccounts);
  const accounts:Account[] = accountRegs.map(captureHeaderAccounts);
  const balanceTotalResult = captureBalanceTotal.exec(rawData);
  const balanceTotal = balanceTotalResult[1];
  const [, statementMonth, statementYear] = dateInformation;
  const dividendsTotalResult = captureDividendsTotal.exec(rawData);
  const dividendsTotal = dividendsTotalResult[1];
  return {
    statementMonth,
    statementYear,
    accounts,
    balanceTotal,
    dividendsTotal,
  };
};

export const regexClean = (data: string): string => {
  let output = data;

  //   fs.writeFileSync("test/original.txt", data, "utf8");

  replaceWithBlanks.forEach(replaceWithBlank => {
    output = output.replace(replaceWithBlank, "");
  });

  replaceWithNewLines.forEach(replaceWithNewLine => {
    output = output.replace(replaceWithNewLine, "\n");
  });

  //   fs.writeFileSync("test/preprocess.txt", output, "utf8");

  output = processRegexSteps(output, formatTransactionTables);

  //   fs.writeFileSync("test/preprocess1.txt", output, "utf8");

  output = processRegexSteps(output, formatTransations);

  //   fs.writeFileSync("test/message.txt", output, "utf8");
  return output;
};

export const processAccounts = (cleanText: string):ProcessedAccount[] =>  {
  const cleanPDFLines = cleanText.split("\n");
  const processedAccounts:ProcessedAccount[] = [];
  let currentTransaction = "";
  cleanPDFLines.forEach(line => {
    if (processAccount.test(line)) {
      const [, name, id, balance] = processAccount.exec(line);
      processedAccounts.push({ name, id, balance: +balance, transactions: [], condenseTransactions: [] });
    } else if (processTransaction.test(line)) {
      const [, date, rawAmount, rawCurrentBalance, rawType, description] = processTransaction.exec(line);
      const type = rawType === "Withdrawal" ? "Withdrawal" : "Deposit"; 
      const amount = +rawAmount;
      const currentBalance = +rawCurrentBalance;
      const currentAccount = processedAccounts[processedAccounts.length - 1];

      currentAccount.transactions.push({
        date,
        amount,
        balance: currentBalance,
        type,
        description,
      });

      if (currentTransaction !== date) {
        currentAccount.condenseTransactions.push({
          date,
          withdrawal: 0,
          deposit: 0,
        });

        currentTransaction = date;
      }

      const currentCondenseTransaction = currentAccount.condenseTransactions[currentAccount.condenseTransactions.length - 1];
      
      switch (type) {
      case "Withdrawal":
        currentCondenseTransaction.withdrawal += amount;
        break;
      case "Deposit":
        currentCondenseTransaction.deposit += amount;
        break;
      default:
      }
    }
  });
  return processedAccounts;
};

export const validateAccounts = (headerAccounts: Account[], processedAccounts: Account[]): boolean => {
  let valid = true;

  if (headerAccounts.length !== processedAccounts.length) {
    valid = false;
  } else {
    let failedOn = -1;
    valid = headerAccounts.every((headerAccount, i) => {
      const result =
        headerAccount.name === processedAccounts[i].name &&
        headerAccount.id === processedAccounts[i].id &&
        headerAccount.balance === processedAccounts[i].balance;

      if (!result) failedOn = i;

      return result;
    });

    if (failedOn !== -1) {
      console.log("failed this on", headerAccounts[failedOn], processedAccounts[failedOn]);
    }
  }

  return valid;
};
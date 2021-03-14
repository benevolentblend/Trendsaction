export interface Account {
  name: string;
  id: string;
  balance: number;
  amount?: number;
}

export interface Transaction {
  balance: number;
  date: string;
}

export interface DetailedTransaction extends Transaction {
  amount: number;
  type: "Withdrawal" | "Deposit";
  description: string;
}

export interface ProcessedAccount extends Account {
  transactions: Transaction[];
  detailedTransactions: DetailedTransaction[];
}

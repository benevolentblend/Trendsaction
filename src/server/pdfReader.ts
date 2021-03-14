import * as fs from "fs";
import * as pdf from "pdf-parse";
import { captureData, regexClean, processAccounts, validateAccounts } from "./pdfreaderHelper";

const pdfReader = async (fileName:string) =>  {
  const dataBuffer = fs.readFileSync(fileName);

  const data = await pdf(dataBuffer);

  const rawPDFText = data.text;
  const capturedData = captureData(rawPDFText);
  const cleanPDFText = regexClean(rawPDFText);
  const processedAccounts = processAccounts(cleanPDFText);

  const isValid = validateAccounts(capturedData.accounts, processedAccounts);

  if (!isValid) return "Problem processing document";

  return { pdfInfo: capturedData, processedAccounts };
};

export default pdfReader;
 
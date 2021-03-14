import { ParentSize } from "@visx/responsive";
import React, { useEffect, useState } from "react";
import { ProcessedAccount, TransactionApiReponse } from "../shared/Models";
import TransactionGraph from "./TransactionGraph";

const App = () => {

  const [accounts, setData] = useState<ProcessedAccount[]>([]);
  const [currentAccount, setCurrentAccount] = useState(-1); 

  const fetchData = async () => {
    const apiResponse: TransactionApiReponse = await (await fetch("/api/fake-data")).json();

    if (apiResponse.pdfInfo.accounts.length > 0) {
      setData([...apiResponse.processedAccounts.filter((account) => account.transactions.length > 0)]);
      setCurrentAccount(0);
    }
  };

  const updateCurrentAccount = (value: number) => {
    setCurrentAccount(value);
  };

  useEffect(()  => {
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      {accounts.length > 0 && currentAccount >= 0 ? (
        <>
          <div className="h-50 w-100 d-inline-block">
            <ParentSize>
              {({height, width}) => (
                <TransactionGraph {...{
                  height,
                  width,
                  account: accounts[currentAccount],           
                }} />
              )}
            </ParentSize>
          </div>
          <select onChange={(event) => {
            updateCurrentAccount(+event.currentTarget.value);
          }}>
            {accounts.map((account, i) => (
              <option value={i} key={account.id}>{account.name}</option>
            ))
            }
          </select>
        </>
      ) : ""}

    </>
    
  );
};

export default App;

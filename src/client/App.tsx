import { ParentSize } from "@visx/responsive";
import React, { useEffect, useState } from "react";
import { Transaction } from "../shared/Models";
import TransactionGraph from "./TransactionGraph";

const App = () => {

  const [transactions, setData] = useState<Transaction[]>([]);

  const fetchData = async () => {
    const apiResponse = await (await fetch("/api/fake-data")).json();

    console.log({apiResponse});
    console.log(apiResponse.processAccounts[2].transactions);

    setData([...apiResponse.processAccounts[2].transactions]);
  };

  useEffect(()  => {
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <ParentSize className="min-vh-100">
        {({height, width}) => (
          <TransactionGraph {...{
            height,
            width,
            accountName: "Checking Account",
            transactions,           
          }} />
        )}
      </ParentSize>
      
    </div>
  );
};

export default App;

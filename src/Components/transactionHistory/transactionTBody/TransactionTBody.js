import React from "react";
import TransactionTRow from "./transactionTRow/TransactionTRow";

const TransactionTBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map((transaction) => (
        <TransactionTRow key={transaction.id} transaction={transaction} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;

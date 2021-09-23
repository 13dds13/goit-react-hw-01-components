import React from "react";
import TransactionTBody from "./transactionTBody/TransactionTBody";
import TransactionTHead from "./transactionTHead/TransactionTHead";

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <TransactionTHead />
      <TransactionTBody transactions={transactions} />
    </table>
  );
};

export default TransactionHistory;

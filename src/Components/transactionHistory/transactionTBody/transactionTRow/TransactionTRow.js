import React from "react";

const TransactionTRow = ({ transaction }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionTRow;

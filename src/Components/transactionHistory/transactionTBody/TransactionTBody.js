import React from "react";
import PropTypes from "prop-types";
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

TransactionTBody.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionTBody;

import React from "react";
import PropTypes from "prop-types";
import TransactionTRow from "./transactionTRow/TransactionTRow";

const TransactionTBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map((transaction, ind) => (
        <TransactionTRow
          key={transaction.id}
          transaction={transaction}
          ind={ind}
        />
      ))}
    </tbody>
  );
};

TransactionTBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionTBody;

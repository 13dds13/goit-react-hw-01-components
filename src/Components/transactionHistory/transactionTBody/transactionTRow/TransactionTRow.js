import React from "react";
import PropTypes from "prop-types";

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

TransactionTRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionTRow;

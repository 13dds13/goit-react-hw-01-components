import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionTRow.module.css";

const TransactionTRow = ({ transaction, ind }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr className={ind % 2 && styles.colorBgr}>
      <td className={styles.tableData}>{type}</td>
      <td className={styles.tableData}>{amount}</td>
      <td className={styles.tableData}>{currency}</td>
    </tr>
  );
};

TransactionTRow.propTypes = {
  ind: PropTypes.number,
  transaction: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default TransactionTRow;

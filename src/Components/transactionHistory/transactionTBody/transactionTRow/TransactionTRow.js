import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionTRow.module.css";

const TransactionTRow = ({ transaction, ind }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr className={ind % 2 && styles.grayBgr}>
      <td className={styles.tableData}>{type}</td>
      <td className={styles.tableData}>{amount}</td>
      <td className={styles.tableData}>{currency}</td>
    </tr>
  );
};

TransactionTRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionTRow;

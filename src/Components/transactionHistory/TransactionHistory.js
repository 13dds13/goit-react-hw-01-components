import React from "react";
import PropTypes from "prop-types";
import TransactionTBody from "./transactionTBody/TransactionTBody";
import TransactionTHead from "./transactionTHead/TransactionTHead";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <TransactionTHead />
      <TransactionTBody transactions={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;

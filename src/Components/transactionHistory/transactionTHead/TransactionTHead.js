import React from "react";
import TransactionTHeadRow from "./transactionTHeadRow/TransactionTHeadRow";
import styles from "./TransactionTHead.module.css";
const TransactionTHead = () => {
  return (
    <thead className={styles.tableHead}>
      <TransactionTHeadRow />
    </thead>
  );
};

export default TransactionTHead;

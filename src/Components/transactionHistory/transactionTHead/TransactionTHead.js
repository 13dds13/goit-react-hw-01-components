import React from "react";
import style from "./TransactionTHead.module.css";
import styles from "../transactionTBody/transactionTRow/TransactionTRow.module.css";
const TransactionTHead = () => {
  return (
    <thead className={style.tableHead}>
      <tr>
        <th className={styles.tableData}>Type</th>
        <th className={styles.tableData}>Amount</th>
        <th className={styles.tableData}>Currency</th>
      </tr>
    </thead>
  );
};

export default TransactionTHead;

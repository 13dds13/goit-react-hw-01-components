import React from "react";
import styles from "../../transactionTBody/transactionTRow/TransactionTRow.module.css";

const TransactionTHeadRow = () => {
  return (
    <tr>
      <th className={styles.tableData}>Type</th>
      <th className={styles.tableData}>Amount</th>
      <th className={styles.tableData}>Currency</th>
    </tr>
  );
};

export default TransactionTHeadRow;

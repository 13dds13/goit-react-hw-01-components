import React from "react";
import StatsData from "./statsData/StatsData";
import styles from "./Stats.module.css";

const Stats = ({ stats }) => {
  return (
    <ul className={styles.container}>
      {Object.entries(stats).map((item) => (
        <StatsData key={item[0]} statType={item[0]} statValue={item[1]} />
      ))}
    </ul>
  );
};

// const Stats = ({ stats }) => {
//   return (
//     <ul className={styles.container}>
//       {Object.keys(stats).map((item) => (
//         <StatsData key={item} statType={item} statValue={stats[item]} />
//       ))}
//     </ul>
//   );
// };

export default Stats;

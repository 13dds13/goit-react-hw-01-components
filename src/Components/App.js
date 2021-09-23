import React from "react";
import Profile from "./profile/Profile";
import data from "../data";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const { user, statData, friends, transactions } = data;

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;

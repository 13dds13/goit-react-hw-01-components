import React from "react";
import PropTypes from "prop-types";
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

App.propTypes = {
  user: PropTypes.object,
  statData: PropTypes.arrayOf(PropTypes.object),
  friends: PropTypes.arrayOf(PropTypes.object),
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default App;

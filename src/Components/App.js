import React from "react";
import data from "../data";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import Container from "./container/Container";

const { user, statData, friends, transactions } = data;
const { name, tag, location, avatar, stats } = user;

const App = () => {
  return (
    <Container>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={statData} title={"Upload stats"} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

// App.propTypes = {
//   data: PropTypes.shape({
//     user: PropTypes.object,
//     statData: PropTypes.arrayOf(PropTypes.object),
//     friends: PropTypes.arrayOf(PropTypes.object),
//     transactions: PropTypes.arrayOf(PropTypes.object),
//   }),
// };

export default App;

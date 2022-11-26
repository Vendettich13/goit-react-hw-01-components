import { Profile } from "./components/Profile/Profile";
import { StatisticList } from "./components/Statistics/StatisticList";
import { FriendList } from "./components/Friends/FriendList";
import { TransactionHistory } from "./components/Transaction/TransactionHistory";
import user from "./data/user.json"
import data from "./data/data.json"
import friends from "./data/friends.json"
import transactions from './data/transactions.json'


export const App = () => {
  return (
    <>
    <Profile user={user} />
    <StatisticList stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
    </>
  );
};
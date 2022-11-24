import { Profile } from "./Profile/Profile";
import { StatisticList } from "./Statistics/StatisticList";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import user from "user.json"
import data from "data.json"
import friends from "friends.json"
import transactions from 'transactions.json'


export const App = () => {
  return (
    <>
    <div>
    <Profile user={user} />
    </div>
    <div>
    <StatisticList stats={data} />
    </div>
    <div>
    <FriendList friends={friends} />
    </div>
    <div>
    <TransactionHistory items={transactions}/>
    </div>
    </>
  );
};
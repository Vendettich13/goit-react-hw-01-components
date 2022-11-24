import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends}) => {
    return <ul className="friend-list">
        {friends.map(friend => 
            <li key={friend.id} className="item">
                <FriendListItem friend={friend}/>
            </li>
        )}
</ul>
}
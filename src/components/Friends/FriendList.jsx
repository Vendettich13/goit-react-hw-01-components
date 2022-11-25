import { PropTypes } from "prop-types"
import { FriendListItem } from "./FriendListItem"
import css from "../Friends/Friends.module.css"

export const FriendList = ({friends}) => {
    return <section>
    <ul className={css.friendList}>
        {friends.map(friend => 
            <li key={friend.id} className={css.item}>
                <FriendListItem friend={friend}/>
            </li>
        )}
        </ul>
        </section>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.number.isRequired,})
    ).isRequired
}
import { PropTypes } from "prop-types"
import css from "../Friends/Friends.module.css"
import { RiRadioButtonLine } from "react-icons/ri"


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return <>
    <span><RiRadioButtonLine size={30} className={css.svg} color={ isOnline === true ? "green" : "red" }/></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
  </>
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }).isRequired
}
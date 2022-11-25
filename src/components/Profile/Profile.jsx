import { PropTypes } from "prop-types"
import css from '../Profile/Profile.module.css'

export const Profile = ({ user: {username, tag, location, avatar, stats } }) => {
  return (
      <section>
        <div className={css.profile}>
  <div className={css.description}>
    <img className={css.avatar}
      src={avatar}
      alt={username}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
      
  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
          
      </div>
      </section>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
    }).isRequired,
}
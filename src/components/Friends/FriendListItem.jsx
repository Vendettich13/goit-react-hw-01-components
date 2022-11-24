export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
  return <>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
  </>
}
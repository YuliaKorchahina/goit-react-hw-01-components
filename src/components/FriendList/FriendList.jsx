import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className="item">
            {/* <span className={style.status}>{isOnline}</span> */}
            { isOnline ? (
              <span className={style.online}></span>
            ) : (
              <span className={style.ofline}></span>
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

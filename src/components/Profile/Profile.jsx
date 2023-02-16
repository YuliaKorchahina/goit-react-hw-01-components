
import style from './profile.module.css'

export const Profile = ({items}) => {
   const {username, tag, location, avatar} = items
  const {stats: {views: view, followers: follower, likes: like}}=items;
  return (
    <ul className={style.list}>
      <div className={style.profile}>
        <div className="description">
          <img width={120}
            src={avatar}
            alt="User avatar"
            className={style.avatar}
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity"> {follower}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity"> {view}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity"> {like}</span>
          </li>
        </ul>
      </div>
    </ul>
  );
};

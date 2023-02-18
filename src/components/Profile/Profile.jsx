import PropTypes from 'prop-types';
import style from './profile.module.css';

export const Profile = ({ items }) => {
  const {
    username = '',
    tag,
    location,
    avatar,
    stats: { views, followers, likes },
  } = items;
  return (
    <ul className={style.list}>
      <div className={style.profile}>
        <div className={style.description}>
          <img
            width={120}
            src={avatar}
            alt="User avatar"
            className={style.avatar}
          />
          <p className={style.name}>{username}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}> {followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}> {views}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}> {likes}</span>
          </li>
        </ul>
      </div>
    </ul>
  );
};

Profile.defaultProps = {
  username: '',
  tag: '',
  location: '',
  avatar: '',
  stats: {},
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

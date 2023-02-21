import PropTypes from 'prop-types';
import style from './profile.module.css';
import { ProfileList } from './ProfileList';

export const Profile = ({ items }) => {
  const {
    username = '',
    tag,
    location,
    avatar
  } = items;
  return (
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
      <ProfileList  items={items}/>     
    </div>
  );
};

Profile.defaultProps = {
  username: '',
  tag: '',
  location: '',
  avatar: '',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

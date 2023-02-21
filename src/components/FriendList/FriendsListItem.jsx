import style from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={style.item}>
      {isOnline ? (
        <span className={style.online}></span>
      ) : (
        <span className={style.ofline}></span>
      )}
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: '',
  name: '',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

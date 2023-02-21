import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friends => (
        <FriendListItem key={friends.id} {...friends} />
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [],
  id: '',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

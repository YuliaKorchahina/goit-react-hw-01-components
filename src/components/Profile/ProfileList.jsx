import PropTypes from 'prop-types';
import style from './profile.module.css';

export const ProfileList = ({ items }) => {
  const {
    stats: { views, followers, likes },
  } = items;
  return (
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
  );
};

ProfileList.defaultProps = {
  stats: {},
};

ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

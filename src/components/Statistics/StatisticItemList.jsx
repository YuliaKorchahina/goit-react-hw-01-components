import { StatisticItem } from './StatisticItem';
import style from './statistics.module.css';

import PropTypes from 'prop-types';

export const StatisticItemList = ({ data }) => {
  return (
     <ul className={style.statList}>
    {data.map(item => (
      <StatisticItem  key={item.id} {...item} />
    ))}
  </ul>)
};

StatisticItemList.defaultProps = {
  data: [],
};

StatisticItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};
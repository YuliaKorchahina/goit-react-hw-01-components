import { StatisticItem } from './StatisticItem';
import style from './statistics.module.css';

export const StatisticItemList = ({ data }) => {
  <ul className={style.statList}>
    {data.map(item => (
      <StatisticItem key={item.id} {...item} />
    ))}
  </ul>;
};

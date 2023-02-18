import { StatisticItemList } from './StatisticItemList';
import style from './statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className={style.title}>Upload stats</h2>}
      <StatisticItemList data={stats} />
    </section>
  );
};

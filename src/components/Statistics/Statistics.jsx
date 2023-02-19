import { StatisticItemList } from './StatisticItemList';
import style from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <div className={style.wrapper}>
      {title && <h2 className={style.title}>Upload stats</h2>}
      <StatisticItemList data={stats} />
      </div>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

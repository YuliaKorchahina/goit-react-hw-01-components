import style from './statistics.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}> {label}</span>
      <span className="percentage"> {percentage} %</span>
    </li>
  );
};

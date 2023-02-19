import style from './statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={style.item} style={{backgroundColor:getRandomHexColor()}}>
      <span className={style.label}> {label}</span>
      <span className={style.percentage}> {percentage} %</span>
    </li>
  );
};

StatisticItem.defaultProps = {
  label: '',
  percentage: 0,
};

StatisticItem.propTypes = {
 
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

};
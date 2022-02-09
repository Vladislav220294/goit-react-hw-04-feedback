import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css'

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      {(good || bad || neutral) !== 0 ? (
        <div className={s.box}>
          <p className={s.feedback}>Good:{good}</p>
          <p className={s.feedback}>Neutral:{neutral}</p>
          <p className={s.feedback}>Bad:{bad}</p>
          <p className={s.feedback}>Total:{total}</p>
          <p className={s.feedback}>Positive feedback:{positivePercentage}%</p>
        </div>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
export default Statistics;

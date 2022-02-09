import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOption = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(item => (
        <button
          key={item}
          className={s.button}
          onClick={() => onLeaveFeedback(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </>
  );
};
FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default FeedbackOption;

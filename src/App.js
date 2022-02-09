import { useState } from 'react';
import Section from './components/Section/Section.jsx';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackStatus = { good, neutral, bad };

  const onLeaveFeedback = item => {
    switch (item) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return Object.values(feedbackStatus).reduce(
      (total, item) => (total += item),
      0
    );
  };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return total ? parseInt((good / total) * 100) : 0;
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={Object.keys(feedbackStatus)}
          onLeaveFeedback={onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;

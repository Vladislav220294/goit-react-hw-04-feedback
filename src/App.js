import { Component } from 'react';
import Section from './components/Section/Section.jsx';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, item) => (total += item),
      0,
    );
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? parseInt((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;

import Description from "./Description/description";
import { useEffect, useState } from "react";
import Options from "./Options/options";
import Feedback from "./Feedback/feedback";
import Notification from "./Notification/Notification";
export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks-value");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    localStorage.setItem("feedbacks-value", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const positiveFeedbacks = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description></Description>
      <Options
        onButtonClickUpdate={updateFeedback}
        onButtonClickReset={resetFeedback}
        totalFeedbackValue={totalFeedback}
      ></Options>
      {totalFeedback === 0 ? (
        <Notification></Notification>
      ) : (
        <Feedback
          params={feedback}
          totalFeedbacks={totalFeedback}
          positiveFeedbacks={positiveFeedbacks}
        ></Feedback>
      )}
    </>
  );
}

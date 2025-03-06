export default function feedback({
  params: { good, neutral, bad },
  totalFeedbacks,
  positiveFeedbacks,
}) {
  return (
    <ul>
      <li>good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>Positive: {positiveFeedbacks}%</li>
    </ul>
  );
}

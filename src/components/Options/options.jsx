import css from "../Options/options.module.css";
export default function Options({
  onButtonClickUpdate,
  onButtonClickReset,
  totalFeedbackValue,
}) {
  return (
    <ul className={css.optionsContainer}>
      <li>
        <button onClick={() => onButtonClickUpdate("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onButtonClickUpdate("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onButtonClickUpdate("bad")}>Bad</button>
      </li>
      {totalFeedbackValue > 0 && (
        <li>
          <button onClick={onButtonClickReset}>Reset</button>
        </li>
      )}
    </ul>
  );
}

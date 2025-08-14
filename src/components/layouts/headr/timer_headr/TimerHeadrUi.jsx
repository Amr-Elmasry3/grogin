// Import Style File
import "./timer_headr.scss";

function TimerHeadrUi({ timer }) {
  return (
    <div className="timer-headr">
      <div className="container">
        <p className="offer">
          Free delivery & 40% Disccount for next 3 orders! Place 1st order in.
        </p>

        <div className="timer">
          <p>Until the end of sale:</p>

          <ul>
            <li className="days">
              {timer.days} <span>days</span>
            </li>
            <li className="hours">
              {timer.hours} <span>hours</span>
            </li>
            <li className="minutes">
              {timer.minutes} <span>minutes</span>
            </li>
            <li className="seconds">
              {timer.seconds} <span>sec.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimerHeadrUi;

// Import Ui
import TimerHeadrUi from "./TimerHeadrUi";

// Import Custom Hooks
import { useTimer } from "../../../../hooks/useTimer";

function TimerHeadr() {
  const { timer } = useTimer("Sep 03 2026, 00:00:00");

  return (
    <>
      <TimerHeadrUi timer={timer} />
    </>
  );
}

export default TimerHeadr;

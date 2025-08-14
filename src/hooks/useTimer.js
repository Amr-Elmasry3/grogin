import { useState, useEffect } from "react";

// time => Number Of Days
export function useTimer(time) {
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetTime = new Date(time).getTime();

    const countDown = setInterval(() => {
      const timeNow = new Date().getTime();
      const diff = targetTime - timeNow;

      if (diff <= 0) {
        clearInterval(countDown);
        setTimer({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimer({
          days: days > 9 ? `${days}` : `0${days}`,
          hours: hours > 9 ? `${hours}` : `0${hours}`,
          minutes: minutes > 9 ? `${minutes}` : `0${minutes}`,
          seconds: seconds > 9 ? `${seconds}` : `0${seconds}`,
        });
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [time]);

  return { timer };
}

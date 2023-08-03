/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function formatTimeWithLeadingZeros(value: number) {
  return value < 10 ? "0" + value : value;
}
function getCurrentTime24HourFormat() {
  const currentTime = new Date();
  const hours = formatTimeWithLeadingZeros(currentTime.getHours());
  const minutes = formatTimeWithLeadingZeros(currentTime.getMinutes());
  return [hours, minutes];
}

export function DateTime() {
  const [time, setTime] = useState(() => getCurrentTime24HourFormat());

  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(getCurrentTime24HourFormat()),
      1000
    );
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="text-slate-100 text-lg font-bold">
      <span>{time[0]} : </span>
      <span>{time[1]}</span>
    </div>
  );
}

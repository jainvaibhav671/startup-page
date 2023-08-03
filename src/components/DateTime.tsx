/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getCurrentTime24HourFormat } from "@/lib/utils";

export function DateTime() {
  const [time, setTime] = useState(() => getCurrentTime24HourFormat());

  // Update time every second
  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(getCurrentTime24HourFormat()),
      1000
    );
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="text-slate-100 text-6xl font-bold">
      <span>{time[0]} : </span>
      <span>{time[1]}</span>
    </div>
  );
}

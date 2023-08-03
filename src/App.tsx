import koro from "/koro.gif";
import links from "../json/page.json";
import { useEffect, useState } from "react";

type CardInterface = {
  href: string;
  name: string;
};

function Card({ links }: { links: CardInterface[] }) {
  const _links = links.map((link, key) => {
    return (
      <a key={key} href={link.href}>
        {link.name}
      </a>
    );
  });

  return (
    <div className="border py-1 px-3 rounded-md text-slate-100 flex flex-col gap-2">
      {_links}
    </div>
  );
}

function DateTime() {
  function formatTimeWithLeadingZeros(value: number) {
    return value < 10 ? "0" + value : value;
  }

  function getCurrentTime24HourFormat() {
    const currentTime = new Date();
    const hours = formatTimeWithLeadingZeros(currentTime.getHours());
    const minutes = formatTimeWithLeadingZeros(currentTime.getMinutes());
    return [hours, minutes];
  }

  const [time, setTime] = useState(() => getCurrentTime24HourFormat());

  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(getCurrentTime24HourFormat()),
      1000
    );
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-slate-100 text-lg font-bold">
      <span>{time[0]} : </span>
      <span>{time[1]}</span>
    </div>
  );
}

function App() {
  const data: CardInterface[][] = links as CardInterface[][];

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-screen h-screen bg-slate-800">
      <DateTime />
      <div className="text-slate-100">
        <img src={koro} alt="Image" />
      </div>
      <div className="flex gap-4">
        {data.map((d, key) => (
          <Card key={key} links={d} />
        ))}
      </div>
    </div>
  );
}

export default App;

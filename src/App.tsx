import koro from "/koro.gif";

import { CardInterface, Card } from "@/components/Card";
import { DateTime } from "@/components/DateTime";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<CardInterface[][]>([]);

  useEffect(() => {
    async function func() {
      const d: CardInterface[][] = await fetch("page.json").then((res) =>
        res.json()
      );

      setData(d);
    }

    func();
  });

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

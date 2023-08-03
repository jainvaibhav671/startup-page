import koro from "/koro.gif";
import links from "../json/page.json";

import { CardInterface, Card } from "@/components/Card";
import { DateTime } from "@/components/DateTime";

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

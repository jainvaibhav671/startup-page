import { DateTime } from "@/components/DateTime/DateTime";

import Image from "next/image";
import koro from "/public/koro.gif";
import { serverClient } from "./_trpc/serverClient";
import { Card } from "@/components/Card/Card";

export default async function App() {

  const res = await serverClient.getDatabase();

  if (!res) return <div>Loading...</div>

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-screen h-screen bg-slate-800">
      <DateTime />
      <div className="text-slate-100">
        <Image src={koro} alt="Image" />
      </div>
      <div className="flex gap-4">
        {res.map((item, key) => <Card key={key} links={item} />)}
      </div>
    </div>
  );
}

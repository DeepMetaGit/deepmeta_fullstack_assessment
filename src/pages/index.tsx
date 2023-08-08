import { useState } from "react";
import BigBox from "~/components/bigBox";
import SmallBox from "~/components/smallBox";

export default function Home() {
  const [counter, setcounter] = useState<number>(0);

  return (
    <>
      <main>
        <div className="m-4 text-xl">Counter: {counter}</div>
        <div className="m-4 flex items-end gap-8">
          <SmallBox />
          <BigBox />
        </div>
        <button className="m-4 rounded-sm border border-slate-950 bg-slate-200 px-4 py-2">
          Reset
        </button>
      </main>
    </>
  );
}

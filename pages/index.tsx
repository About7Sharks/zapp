import { Import, useDeno } from "https://deno.land/x/aleph/mod.ts";
import React, { useState } from "https://esm.sh/react?dev";

import UserStats from "../components/UserStats.tsx";
import Chart from "../components/Chart.tsx";
export default function Home() {
  // const [count, setCount] = useState(0);
  // const version = useDeno(() => {
  //   return Deno.version;
  // });

  return (
    <div className="page">
      <Import from="../style/index.less" />
      <h1>Welcome to <strong>Aleph.js</strong>!</h1>
      <Chart coin="ethereum" days={14} currency="usd" />
      <UserStats />
      {/* <p className="copyinfo">Built by Aleph.js in Deno v{version.deno}</p> */}
    </div>
  );
}

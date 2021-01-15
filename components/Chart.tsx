import React, { useEffect, useState } from "https://esm.sh/react?dev";
import { Line } from "https://cdn.skypack.dev/react-chartjs-2";
import axios from "https://cdn.skypack.dev/axios";
interface ChartProps {
  coin: string;
  currency: string;
  days: number;
}
const Chart: React.FC<ChartProps> = ({ coin, currency, days }) => {
  const [query, setQuery] = useState<ChartProps>({ coin, currency, days });
  const [data, setData] = useState({ prices: [] });
  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/${query.coin}/market_chart?vs_currency=${query.currency}&days=${query.days}`,
    ).then((res) => {
      setData(res.data);
    });
  }, [query]);
  return (
    <div>
      <input
        defaultValue={query.coin}
        placeholder={query.coin}
        type="text"
        id="coin"
      />
      <input
        defaultValue={query.days}
        placeholder={query.days}
        type="number"
        id="days"
      />
      <input
        defaultValue={query.currency}
        placeholder={query.currency}
        type="text"
        id="currencey"
      />
      <button
        onClick={() => {
          setQuery({
            coin: (document.getElementById("coin") as any).value,
            days: (document.getElementById("days") as any).value,
            currency: (document.getElementById("currencey") as any).value,
          });
        }}
      >
        Search
      </button>
      <Line
        options={{
          legend: {
            display: false,
          },
          title: {
            display: false,
            // text: query.coin.toUpperCase(),
          },
        }}
        data={{
          labels: data.prices.map((i) => {
            return new Date(i[0]).toDateString();
          }),
          datasets: [
            {
              label: query.coin,
              data: data.prices.map((i) => {
                return i[1].toFixed(2);
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;

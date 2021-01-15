import { ethers } from "https://cdn.ethers.io/lib/ethers-5.0.esm.min.js";
import React, { useEffect, useState } from "https://esm.sh/react?dev";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/e8235710b20f4f039a994b4f39c0d01f",
);

let user = "zacarlin.eth";

// let currentBlock = await provider.getBlockNumber();
// // { Promise: 11613007 }

// // Get the balance of an account (by address or ENS name, if supported by network)
// let bigBalance = await provider.getBalance(user);
// let transactionsFromAccount = await provider.getTransactionCount(user);
// let balance = ethers.utils.formatEther(bigBalance);
// // { BigNumber: "2337132817842795605" }
// let gasPrice = await provider.getGasPrice();
// // let hash = await provider.getHash();
// // let difficulty = await provider.difficulty();
// console.log(
//   `As of block ${currentBlock} ${user} has ${(balance * 1).toFixed(5)} eth`,
// );

// console.log(`⛽ Gas:${gasPrice}`);
// // console.log(hash);
// console.log(transactionsFromAccount);
interface UserProps {
}
const UserStats: React.FC<UserProps> = ({ coin, currency, days }) => {
  const [state, setState] = useState(
    { gas: 0, ethBalance: 0, currentBlock: 0 },
  );
  const effect = async () => {
    console.log(await provider.getGasPrice());
    setState({
      ethBalance: ethers.utils.formatEther(await provider.getBalance(user)),
      currentblock: await provider.getBlockNumber(),
      gas: await provider.getGasPrice(),
    });
  };
  useEffect(() => {
    effect();
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <div>
      Current Block: {state.currentblock}
      <br />
      Balance: {(state.ethBalance * 1).toFixed(5)}
      <br />
      ⛽ Gas:${state.gas}
    </div>
  );
};

export default UserStats;

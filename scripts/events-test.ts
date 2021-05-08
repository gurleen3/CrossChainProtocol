import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/src/signer-with-address";
import { providers } from "ethers";
import { ethers } from "hardhat";
import address from "./address";
import path from "path";
import fs from "fs";

const projectKey =
"wss://goerli.infura.io/ws/v3/e17826c132f349119df4068f0e71e56f";
const abi = JSON.parse(
  fs
    .readFileSync(
      path.resolve(
        __dirname,
        "../artifacts/contracts/Token.sol/Token.json"
      )
    )
    .toString()
).abi;

const main = async () => {
  const websocketProvider = new ethers.providers.WebSocketProvider(projectKey);
  const contract = new ethers.Contract(address, abi, websocketProvider);
  contract.on({}, (data) => console.log(data));
};

main();
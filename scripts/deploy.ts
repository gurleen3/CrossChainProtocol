
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/src/signer-with-address";
import { providers } from "ethers";
import "@nomiclabs/hardhat-ethers";
import{ ethers }from 'hardhat';
import path from "path";
import fs from "fs";

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
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("Token");
  const contract = await contractFactory.deploy();
  
  console.log(contract.address);
};

main();
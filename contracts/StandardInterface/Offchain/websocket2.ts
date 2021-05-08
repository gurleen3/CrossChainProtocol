import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { providers } from "ethers";
import { ethers } from "ethers";

const contract = new ethers.Contract(address, abi, websocketProvider);
contract.on("accountsChanged", (accounts: string[]) => {
    console.log(accounts);
  });
  
  // Subscribe to chainId change
  providers.on("chainChanged", (chainId: number) => {
    console.log(chainId);
  });
  
  // Subscribe to provider connection
  providers.on("connect", (info: { chainId}) => {
    console.log(info);
  });
  
  // Subscribe to provider disconnection
  providers.on("disconnect", (error: { code; message}) => {
    console.log(error);
  });

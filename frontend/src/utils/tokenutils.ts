import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import abi from "../abi/TokenPool";

const TOKEN_POOL_GOERLI = "0x3Cf5a6974368C55F7FAC46e824ddf5dA4D80E24d";
const TOKEN_POOL_ROPSTEN = "0xe6e9f47cb5b6f7cc4474c0d822008708e94353dd";

interface transfer {
    reqId: ethers.BigNumber;
    sourceChainId: ethers.BigNumber;
    destinationChainId: ethers.BigNumber;
    sender: string;
    isActive: boolean;
  }

  const getContract = (
    provider: ethers.providers.JsonRpcProvider,
    chainId: number
  ): ethers.Contract | undefined => {
    if (chainId === 3) {
      return new ethers.Contract(TOKEN_POOL_ROPSTEN, abi, provider);
    } else if (chainId === 5) {
      return new ethers.Contract(TOKEN_POOL_GOERLI, abi, provider);
    }
  };

  declare global {
    interface Window {
      ethereum: ethers.providers.ExternalProvider;
    }
  }

  export {getContract};

  export type{transfer};
// require("@nomiclabs/hardhat-waffle");

// // The next line is part of the sample project, you don't need it in your
// // project. It imports a Hardhat task definition, that can be used for
// // testing the frontend.
// require("./tasks/faucet");
// require("@nomiclabs/hardhat-etherscan");
// module.exports = {
//   solidity: "0.7.3",
//   paths: {
//     artifacts: './src/artifacts',
//   },
//   networks: {
//     hardhat: {
//       chainId: 1337
//     }
//   }
// };
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
require('dotenv').config();
import { HardhatUserConfig } from "hardhat/config";

// dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/e17826c132f349119df4068f0e71e56f",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/e17826c132f349119df4068f0e71e56f",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/e17826c132f349119df4068f0e71e56f",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    kovan: {
      url: "https://kovan.infura.io/v3/e17826c132f349119df4068f0e71e56f",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomicfoundation/hardhat-verify";

const { API_URL, PRIVATE_KEY, BNB_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: BNB_API_KEY,
  },
};

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomicfoundation/hardhat-verify";

const { API_URL, PRIVATE_KEY, SAIGON_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  namedAccounts: {
    deployer:
      "privatekey://0x2504f2e738bf5bf71ea9ddbec3e4c895dfe3b7d056f9e5f12055941fea74c092",
  },
  sourcify: {
    enabled: true,
  },
  defaultNetwork: "saigon",
  networks: {
    hardhat: {},
    mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
    saigon: {
      chainId: 2021,
      url: "https://saigon-testnet.roninchain.com/rpc",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      saigon: SAIGON_API_KEY,
    },
    customChains: [
      {
        network: "saigon",
        chainId: 2020,
        urls: {
          apiURL: "https://sourcify.roninchain.com/server/",
        },
      },
    ],
  },
};

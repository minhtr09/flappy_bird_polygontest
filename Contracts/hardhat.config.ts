import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomicfoundation/hardhat-verify";

const { API_URL, PRIVATE_KEY, SAIGON_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  sourcify: {
    enabled: true,
  },
  defaultNetwork: "saigon",
  networks: {
    saigon: {
      chainId: 2021,
      url: "https://saigon-testnet.roninchain.com/rpc",
      accounts: [PRIVATE_KEY],
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
  },
};

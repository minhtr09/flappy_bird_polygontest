import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomicfoundation/hardhat-verify";

<<<<<<< HEAD
const { API_URL, PRIVATE_KEY, BNB_API_KEY } = process.env;
=======
const { API_URL, PRIVATE_KEY, SAIGON_API_KEY } = process.env;
>>>>>>> 2f530f44d949c1a1acc6e174b7e0c9dd3604d478

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
<<<<<<< HEAD
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      accounts: [PRIVATE_KEY],
=======
    saigon: {
      chainId: 2021,
      url: "https://saigon-testnet.roninchain.com/rpc",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      saigon: SAIGON_API_KEY,
>>>>>>> 2f530f44d949c1a1acc6e174b7e0c9dd3604d478
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

  etherscan: {
    apiKey: BNB_API_KEY,
  },
};

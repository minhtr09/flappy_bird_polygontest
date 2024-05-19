import { ethers } from "hardhat";

async function main() {
  // const Floppy = await ethers.getContractFactory("Floppy");
  // const floppy = await Floppy.deploy(
  //   "0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9"
  // );
  // console.log("Floppy address: ", floppy.target);

  // const USDT = await ethers.getContractFactory("USDT");
  // const usdt = await USDT.deploy("0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9");
  // console.log("USDT address: ", usdt.target);

  // const Bird = await ethers.getContractFactory("Bird");
  // const bird = await Bird.deploy("0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9");
  // console.log("Bird NFT address: ", bird.target);

  // const MarketPlace = await ethers.getContractFactory("BirdMarketPlace");
  // const marketPlace = await MarketPlace.deploy(
  //   "0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9",
  //   "0xea64f6cF8a29FA439450dC65AFEe3DEE4Fe02062",
  //   "0x26c25EFf885Ef34A33B265345cAAd6856E9a3cAA"
  // );
  // console.log("MarketPlace contract address: ", marketPlace.target);

  const flpCrowndSale = await ethers.getContractFactory("FLPCrowdSale");
  const deployment = await flpCrowndSale.deploy(
    "0xdB46BeA84083F31e61aC7BDE0691c0CDFD3842a7",
    "100000",
    "100000",
    "0xdB46BeA84083F31e61aC7BDE0691c0CDFD3842a7",
    "0xea64f6cF8a29FA439450dC65AFEe3DEE4Fe02062"
  );
  console.log(
    "flpCrowndSale contract address: ",
    deployment.deploymentTransaction()?.hash
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

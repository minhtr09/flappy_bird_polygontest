import { ethers } from "hardhat";

async function main() {
  const Floppy = await ethers.getContractFactory("Floppy");
  const floppy = await Floppy.deploy(
    "0x74fe5f04ccbe9c0dbcd0039cfb8d7212b2e6e452"
  );
  console.log("Floppy address: ", floppy.target);

  // const USDT = await ethers.getContractFactory("USDT");
  // const usdt = await USDT.deploy("0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9");
  // console.log("USDT address: ", usdt.target);

  // const Bird = await ethers.getContractFactory("Bird");
  // const bird = await Bird.deploy("0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9");
  // console.log("Bird NFT address: ", bird.target);


  // const FLPCrowdSale = await ethers.getContractFactory("FLPCrowdSale");
  // const flpcrowndsale = await FLPCrowdSale.deploy(
  //   "0xf9577C9df5141B8793df5B869E0548dD8fBe3Ce9",
  //   10000,
  //   5000,
  //   "0x2A744DbD8F36632dEeC27E899B8D80a71fA9545C",`nosc
  //   "0xCCec906001af3cF82ceb78E3f078eD04C3274C45"
  // );
  // console.log("Bird NFT address: ", flpcrowndsale.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers, network } from "hardhat";
import { Staking__factory, Staking } from "../typechain-types";


async function main() {

  const usdt_address = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  const wbtc_address = "TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65";
  const weth_address = "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR";

  const stakingFactory: Staking__factory = await ethers.getContractFactory("Staking");
  const staking: Staking = await stakingFactory.deploy(usdt_address, weth_address, wbtc_address);
  await staking.waitForDeployment();

  const stakingAddress = await staking.getAddress();
  console.log("Staking deployed to:", stakingAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

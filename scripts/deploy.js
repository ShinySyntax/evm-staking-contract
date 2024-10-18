// scripts/deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Staking = await ethers.getContractFactory("Staking");
    const usdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    const wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const wbtcAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    const initialOwner = "0x44Ee90900f9A94B4790f472DC8C376a9b3bd9baB";

    const staking = await Staking.deploy(usdtAddress, wethAddress, wbtcAddress, initialOwner);

    await staking.deployed();

    console.log("Staking deployed to:", staking.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
    },
    
  },
  solidity: {
    version: "0.8.20",
    settings: {
      
        optimizer: {
          enabled: true,
          runs: 1000,
        },
        // viaIR: true,
      
    },
    
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.SEPOLIA_API_KEY,
      tron: process.env.TRON_API_KEY
    },
  }
};

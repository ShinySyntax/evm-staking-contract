import dotenv from 'dotenv';
import TronWeb from 'tronweb';
dotenv.config();

// const TronWeb = require('tronweb');
// const artifacts = require('../artifacts/contracts/Staking.sol/Staking.json');
import artifacts from '../artifacts/contracts/Staking.sol/Staking.json' assert { type: 'json' };

const fullNode = 'https://api.nileex.io';
const solidityNode = 'https://api.nileex.io';
const eventServer = 'https://api.nileex.io';
const privateKey = process.env.PRIVATEKEY;
// const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
const contractABI = artifacts.abi;
const contractBytecode = artifacts.bytecode;

const usdt_address = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
const weth_address = "TXWkP3jLBqRGojUih1ShzNyDaN5Csnebok";
const wbtc_address = "TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65";

async function deployContract() {
  const tronWeb = new TronWeb({
    fullNode,
    privateKey
});

  const contract = await tronWeb.contract().new({
    abi: contractABI,
    bytecode: contractBytecode,
    feeLimit: 1000000000,
    callValue: 0,
    userFeePercentage: 30,
    originEnergyLimit: 10000000,
    parameters: [usdt_address, weth_address, wbtc_address],
  });
  const hexAddress = contract.address;
  const base58Address = tronWeb.address.fromHex(hexAddress);
  console.log('Contract deployed at address:');
  console.log('Hexadecimal: ', hexAddress);
  console.log('Base58Check: ', base58Address);
}
deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
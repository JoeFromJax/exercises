const prompt = require('prompt-promise');
const ethers = require('ethers');

async function getAccountInfo() {
  // Prompt the user for an Ethereum address
  const address = await prompt('Enter an Ethereum address: ');

  // Check if the address is a valid Ethereum address
  if (!ethers.utils.isAddress(address)) {
    console.error(`"${address}" is not a valid Ethereum address.`);
    return;
  }

  // Connect to the Ethereum network
  const provider = new ethers.providers.InfuraProvider('mainnet', '41f52139caac40d88fe3afd7514c156e');

  // Get the current block number
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current block number: ${blockNumber}`);

  // Get the current gas price
  const gasPrice = await provider.getGasPrice();
  console.log(`Current gas price: ${gasPrice.toString()} wei`);

  // Get the current chain id
  const chainId = await provider.getNetwork();
  console.log(`Current chain id: ${chainId}`);

  // Get the balance of the account in wei
  const balance = await provider.getBalance(address);

  // Convert the balance from wei to ether
  const etherBalance = ethers.utils.formatEther(balance);
  console.log(`Balance: ${etherBalance} ETH`);

  // Get the transaction count of the account
  const transactionCount = await provider.getTransactionCount(address);
  console.log(`Transaction count: ${transactionCount}`);
}

getAccountInfo();

//This code first prompts the user for an Ethereum address and then uses the 
//isAddress method of the utils object to validate the input. 
//If the input is not a valid Ethereum address, it displays an error message.


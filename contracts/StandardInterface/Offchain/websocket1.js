var myContract = new ethers.Contract(contractAddress, abi);
var meta = myContract.at("address");
var url = connection.url;
var wsProvider = new ethers.providers.WebSocketProvider( [ url [network ] ] )
provider.on("block", (blockNumber) => {
    // Emitted on every block change
})
// here you'll get callback for each new block
// then you can get all transactions in that block
// and add a for loop on all transactions and check the events from transaction logs
const blockData = await provider.getBlockWithTransactions(blockNumber);
blockData.transactions.forEach(async (transactionsObj) => {
    const receipt = await provider.getTransactionReceipt(transactionsObj.hash);
    receipt.logs.forEach(async (receiptLog) => {
        const contractInstance = await this.contract.deployed();
        const data = contractInstance.interface.parseLog(receiptLog);
        console.log(data)
    })
})
//read the event information from Blockchain, parse it and create a new transaction on other chain
// create an event where u send the data from this chain to the other chain
// parameter required for other chain = data, chainId, 
var event = meta.transfer();

export 
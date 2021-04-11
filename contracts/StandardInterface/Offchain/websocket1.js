provider.on("block", (blockNumber) => {
    // Emitted on every block change
})
// here you'll get callback for each new block
// then you can get all transactions in that block
// and add a for loop on all transactions and check the events from transaction logs
const blockData = await provider.getBlockWithTransactions(blockNumber);
blockData.transactions.forEach(async (transactionsObj) => {
    const receipt = await provider.getTransactionReceipt(transactionsObj.hash);
    receipt.logs.forEach(async (receiptLog: receiptlog ) => {
        const contractInstance = await this.contract.deployed();
        const data = contractInstance.interface.parseLog(receiptLog);
        console.log(data)
    })
})


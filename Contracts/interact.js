const Web3 = require('web3');
let web3 = new Web3('http://localhost:8545');
const from = '0xcff3712a3457ec1c431e921954be85505ce4f029';
const to = '0xA55f2759b8ee4E34D29E078e9D99ea553da08125';
web3.eth.call({from : from, to: to}, "latest")
.then(console.log);
const Web3 = require('web3');
let web3 = new Web3('http://localhost:8545');

const originContract = '0x683360005260206000f360005260096017f3';
const chainIdContract = '0x684660005260206000f360005260096017f3';
const callValueContract = '0x683460005260206000f360005260096017f3';
const from = '0xcff3712a3457ec1c431e921954be85505ce4f029';
//console.log(from);

console.log('test this bitch out')

web3.eth.sendTransaction({from : from, data : originContract}).on('receipt', function (receipt){
    console.log(receipt);
})

console.log('tested');
//var V3KeyStore = web3.eth.accounts.encrypt("0x849e55af61ee8672aa44947950375b474bb586c737d3cbc45fa798ff84e1c558", "password");
//console.log(JSON.stringify(V3KeyStore));
//process.exit();
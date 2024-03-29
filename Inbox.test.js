const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //this is a constructor and hence W is caps in Web3 const
const web3 = new Web3(ganache.provider()); //this is an instance of Web3
 const {interface,bytecode} = require('../compile');
 let accounts;
 let inbox;
beforeEach(async () => {

    accounts =  await web3.eth.getAccounts();
    inbox =  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode ,arguments:['HO']})
    .send({ from :accounts[0],gas:'1000000'});
    });
 
describe('Inbox', () => {
  it("deploys a contract", () => {
    console.log('inbox');
});
});
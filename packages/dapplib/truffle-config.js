require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival noble modify give clog metal genuine'; 
let testAccounts = [
"0x8455ba58376a9ff55d0dab1f4f78bd00ef1fac7b1f4fd0762f98165cfb6676fd",
"0x52c151934e2e1580ebff1f9723ddb57bee6831efda33ea449fdef201160920e1",
"0x100672a0edb2d96d1d8026466ece7344a4ecff0e8dfa290502c2c0e104a9f71f",
"0x415cf9528c221f60a6be824016b7c6e0266b38d881397f8ed6ec7a38247ec59b",
"0xee06097545c85ff98b1bdd118c02498327d1da08ceb7adeffe0365cd46b00960",
"0x4c12fea2476714f7a6ede811f2b6a83d12177840384d7b534881d96c750590b9",
"0xe0f903129edc1ce145052052520bbe6ca186ac601cf9237dc53636f5d16d4098",
"0x63bebf559d8d51f7ef3200d3970b23bdc3f599d59f9552e1811e8e44d724b07a",
"0x10432bd18fc75c8398abfeb6c98981654e2a59a3ac13dc6da5a447df41558e47",
"0x28472e1b3413d5131154efe2c77cd2a8b0bab0b209d70ba10bca8f05b83ed74a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



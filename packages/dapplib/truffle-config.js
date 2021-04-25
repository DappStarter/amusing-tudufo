require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture hill fresh spot toy note spike prosper install cricket slot giant'; 
let testAccounts = [
"0x17d9cd8ea0f6787f1711961f3e03ce463be7b3d624e4a7f6038fd54558cd83e1",
"0x44b83f0d588f2122d513c728f42c9bc6e650414730176a993c00b9102b16f489",
"0x05b68efae8dc1eeeeb023906152c27d35a811a984f78f5e887e8073b16662786",
"0x6f9cd1cca06bafac9046093901a4979b998f594f87e08298e36ff10f2588d5e3",
"0x59ae6011e3fce6a848f81a6ff76a9b1225090c783bd9495c5ef38179f1fbee3d",
"0x3ec05f1f60211e65be1e4bfca2b21dbd38b52b228c45a8dc8b25d17af527bb77",
"0x39ecc0df971dce01da5649b72df4b55d6338d2b748d57c9ef4d78f65c03cf7bb",
"0xb5f4e2a72564850a3b93c0787a01a9be061f8c27ba24fee351dccc2cb80ad5f9",
"0xbd1aae3dda0cb3f2368deb9fd93582e54b113204ab5c1f560b4408aa154b1d33",
"0xa18569a7c42cdb5c87a73d96e88f86daa77a99bfcedc40c434e2a8c91bb1dc15"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337"
    },
    linea: {
      provider: () => new HDWalletProvider(
        "ba660136095fcd5fed8b03df807f42bafb1796c007a126e342509bd260642f21",
        "https://rpc.goerli.linea.build	"
      ),
      network_id: 59140,
      enableTimeouts: false
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/web3/contracts',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 1773
      },
      version: '0.8.20'
    },
  }
}

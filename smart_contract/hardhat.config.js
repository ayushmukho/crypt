// https://eth-ropsten.alchemyapi.io/v2/t6pAzkmLBS6bO5J9hkFmVREdDOTZzNSU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/t6pAzkmLBS6bO5J9hkFmVREdDOTZzNSU",
      accounts: [ "a4b36969cbf803413f83e5adea733e12d7f74429da174dbc01a0218f4cb570cf" ]
    }
  }
}
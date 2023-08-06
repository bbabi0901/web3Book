import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import { exit } from 'node:process'

require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  defaultNetwork: 'local',
  networks: {
    local: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
      forking: {
        url: 'https://bsc-dataseed.binance.org',
      },
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 5,
      },
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      get accounts(): string[] {
        return [
          dotEnv('TESTNET_DEPLOYER_PRIVATE_KEY'),
          dotEnv('TESTNET_OPERATOR_PRIVATE_KEY'),
          dotEnv('TESTNET_SUBSCRIBER_PRIVATE_KEY'),
        ]
      },
    },
  },
}

export default config

export function dotEnv(envKey: string) {
  const envVal = process.env[envKey]
  if (!envVal) {
    console.error(`Environment is missing '${envKey}' variable!`)
    exit(1)
  }
  return envVal
}

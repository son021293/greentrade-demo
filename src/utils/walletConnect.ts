// @ts-ignore
import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
import { URLS } from './chains'

// @ts-ignore
export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
    (actions: any) =>
        new WalletConnect(actions, {
            rpc: URLS,
        }),
    Object.keys(URLS).map((chainId) => Number(chainId))
)

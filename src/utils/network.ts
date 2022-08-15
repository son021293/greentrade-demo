// @ts-ignore
import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { URLS } from './chains'

// @ts-ignore
export const [network, hooks] = initializeConnector<Network>(
    (actions: any) => new Network(actions, URLS),
    Object.keys(URLS).map((chainId) => Number(chainId))
)

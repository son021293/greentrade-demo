// @ts-ignore
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { hooks as metaMaskHooks, metaMask } from '../utils/connectors/metaMask'
import { hooks as networkHooks, network } from '../utils/network'

const connectors: [MetaMask | Network, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
    [network, networkHooks],
]


export const Provider = () => {
    return (
        // @ts-ignore
        <Web3ReactProvider connectors={connectors}/>
    )
}

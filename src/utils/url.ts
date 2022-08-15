// @ts-ignore
import { initializeConnector } from '@web3-react/core'
import { Url } from '@web3-react/url'
import { URLS } from './chains'

// @ts-ignore
export const [url, hooks] = initializeConnector<Url>((actions: any) => new Url(actions, URLS[1][0]), [1])

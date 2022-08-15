const truncateHash = (address: string, startLength = 4, endLength = 3) => {
    return `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`
}

export default truncateHash

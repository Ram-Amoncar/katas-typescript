function get1DArray<T>(...args: T[][]) {
    return args.reduce((prevCallVal: T[], curVal: T[]) => [...prevCallVal, ...curVal])
}

export { get1DArray }

function get1DArray<T>(...args: T[][]) {
    return args.flat(Infinity)
}

export { get1DArray }

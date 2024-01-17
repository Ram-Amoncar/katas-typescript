function forEach<T>(values: T[], callback: (value: T) => void) {
    for (const value of values) {
        callback(value)
    }
}

export { forEach }

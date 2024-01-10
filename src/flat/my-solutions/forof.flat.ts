function get1DArray<T>(...args: T[][]) {
  let newArr: T[] = []
  for (const arr of args) {
    newArr.push(...arr)
  }
  return newArr
}

export { get1DArray }

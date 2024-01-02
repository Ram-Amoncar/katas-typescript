function getHighestNumber(arr: number[]): number {
  return arr.reduce((prevReturn: number, currentNum: number): number => {
    return prevReturn > currentNum ? prevReturn : currentNum
  })
}

export { getHighestNumber }

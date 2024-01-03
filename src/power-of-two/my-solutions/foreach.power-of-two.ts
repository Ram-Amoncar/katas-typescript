function getPowerOfTwo(numbers: number[]): number[] {
  let newArr: number[] = []
  numbers.forEach((value: number): number => newArr.push(value * value))
  return newArr
}

export { getPowerOfTwo }

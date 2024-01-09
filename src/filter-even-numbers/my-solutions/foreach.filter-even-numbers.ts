function filterEvenNumbers(numbers: number[]): number[] {
  let evenArr: number[] = []
  numbers.forEach(value => {
    if (value % 2 === 0) evenArr.push(value)
  })
  return evenArr
}

export { filterEvenNumbers }

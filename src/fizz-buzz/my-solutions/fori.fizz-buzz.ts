function fizzBuzz(nums: number): (string | number)[] {
  let newArr: (string | number)[] = []
  for (let i = 1; i <= nums; i++) {
    if (i % 3 === 0 && i % 5 === 0) newArr.push('fizzbuzz')
    else if (i % 3 === 0) newArr.push('fizz')
    else if (i % 5 === 0) newArr.push('buzz')
    else newArr.push(i)
  }
  return newArr
}

export { fizzBuzz }

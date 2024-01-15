type Grouper = {
  [key: number]: string[]
}
type Person = {
  name: string
  age: number
}

function getGrouped(people: Person[]): Grouper {
  return people.reduce<Grouper>((prev: Grouper, curVal: Person): Grouper => {
    prev.hasOwnProperty(curVal.age)
      ? prev[curVal.age].push(curVal.name)
      : (prev[curVal.age] = [curVal.name])
    return prev
  }, {})
}

export { getGrouped }

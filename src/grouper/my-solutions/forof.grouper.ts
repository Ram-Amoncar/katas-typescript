type Grouper = {
    [key: number]: string[]
}
type Person = {
    name: string
    age: number
}

function getGrouped(people: Person[]): Grouper {
    let group: Grouper = {}
    for (const p of people) {
        group.hasOwnProperty(p.age) ? group[p.age].push(p.name) : (group[p.age] = [p.name])
    }
    return group
}

export { getGrouped }

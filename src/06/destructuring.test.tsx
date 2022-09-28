

export type ManType2 = {
    name: string
    age: number
    lessons: Array<{title: string}>,
    address: {
        street: {
            title: string
}}}

let man: ManType2;

beforeEach(() => {
    man = {
        name: 'Kate',
        age: 26,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: 'Kalina'
            }
        }
    }
})

test('', () => {

    const {age, lessons} = man
    const {title} = man.address.street
    expect(age).toBe(26)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Kalina')
})
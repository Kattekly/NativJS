

export type ManType2 = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>,
    address: {
        street: {
            title: string
}}}

let man: ManType2;

beforeEach(() => {
    man = {
        name: 'Kate',
        age: 26,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
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
    expect(lessons.length).toBe(3)
    expect(title).toBe('Kalina')
})

test('', () => {
    const lesson1 = man.lessons[0]
    const lesson2 = man.lessons[1]

    //const [ls1, ls2] = man.lessons

const [ls1, ...restLessons] = man.lessons


   // expect(lesson1.title).toBe('1')
 //   expect(lesson2.title).toBe('2')

  //  expect(ls1.title).toBe('1')
  //  expect(ls2.title).toBe('2')
  //  expect(restLessons.length).toBe(1)
  //  expect(restLessons[0].title).toBe('3')
  //  expect(restLessons[0].name).toBe('react')

    expect(restLessons[1]).toStrictEqual({title: "3", name: 'react'})

})
import {ManType} from "./10.01";

function icreaseAge(u: ManType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
}

test('referens type test', () => {
    let man: ManType = {
        name: 'Kate',
        hair: 20,
        address: {
            title: 'Covir'
        }
    }

   const cutUser = icreaseAge(man, 2)

    expect(man.hair).toBe(20)
    expect(cutUser.hair).toBe(10)
})

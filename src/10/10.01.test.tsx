import {ManType} from "./10.01";

function icreaseAge(u: ManType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = copy.hair / power
}

test('referens type test', () => {
    let man: ManType = {
        name: 'Kate',
        hair: 20,
        address: {
            title: 'Covir'
        }
    }

    icreaseAge(man, 2)

    expect(man.hair).toBe(10)
})

import {icreaseAge, ManType} from "./10.01";


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


test('change address', () => {
    let man: ManType = {
        name: 'Kate',
        hair: 20,
        address: {
            title: 'Covir'
        }
    }

    const cutUser = moveUser(man, 'Kiev')

    expect(man.hair).toBe(20)
    expect(cutUser.hair).toBe(10)
})
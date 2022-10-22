import {icreaseAge, ManType, moveUser, upgradeManLaptopModel, upgradeUserLaptop, UserHasLaptopType} from "./10.01";


test('referens type test', () => {
    let man: ManType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir'
        }
    }

   const cutUser = icreaseAge(man, 2)

    expect(man.hair).toBe(20)
    expect(cutUser.hair).toBe(10)
})


test('change address', () => {
    let man: UserHasLaptopType  = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'GGGG'
        }
    }

    const cutUser = moveUser(man, 'Kiev')

    expect(man).not.toBe(cutUser)
    expect(man.address).not.toBe(cutUser.address)
    expect(man.laptop).toBe(cutUser.laptop)
    expect(cutUser.address.city).toBe('Kiev')

})

test('update laptop', () => {
    let man: UserHasLaptopType  = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        }
    }

    const cutUser = upgradeUserLaptop(man, 'Macbook')

    expect(man).not.toBe(cutUser)
    expect(man.address).toBe(cutUser.address)
    expect(man.laptop).not.toBe(cutUser.laptop)
    expect(cutUser.laptop.title).toBe('Macbook')
    expect(man.laptop.title).toBe('Zenbook')

})

test('update laptop model', () => {
    let man: UserHasLaptopType  = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        }
    }

    const copyMan = upgradeManLaptopModel(man, 'FFFF0')

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.laptop).not.toBe(copyMan.laptop)
    expect(copyMan.laptop.model).toBe('FFFF0')
    expect(man.laptop.model).toBe('B23DZ')

})

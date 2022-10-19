import {ManType} from "./10.01";

function icreaseAge(u: ManType) {
    u.age = u.age + 1
}

test('referens type test', () => {
    let man: ManType = {
        name: 'Kate',
        age: 26,
        address: {
            title: 'Covir'
        }
    }

    icreaseAge(man)
})

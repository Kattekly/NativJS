import {
    addNewBookUser,
    addNewCompanyUser,
    icreaseAge,
    ManType,
    moveUser,
    moveUserToOtherHouse,
    removeBookUser,
    SkillsManType,
    updateBookUser, updateNewCompany,
    updateNewCompanyUser,
    updateSkillsUser,
    upgradeManLaptopModel,
    upgradeUserLaptop,
    UserHasLaptopType,
    UserWithBooksType,
    WithCompaniesType
} from "./10.01";


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
    let man: UserHasLaptopType = {
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
    let man: UserHasLaptopType = {
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
    let man: UserHasLaptopType = {
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

test('update house number', () => {
    let man: UserHasLaptopType & UserWithBooksType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'React']
    }

    const copyMan = moveUserToOtherHouse(man, 99)

    expect(man).not.toBe(copyMan)
    expect(man.address).not.toBe(copyMan.address)
    expect(man.address.house).toBe(12)
    expect(copyMan.address.house).toBe(99)
    expect(man.books).toBe(copyMan.books)
})

test('add new book', () => {
    let man: UserHasLaptopType & UserWithBooksType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'React']
    }

    const copyMan = addNewBookUser(man, 'TS')

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).not.toBe(copyMan.books)
    expect(man.books.length).toBe(3)
    expect(copyMan.books[3]).toBe('TS')
    expect(copyMan.books.length).toBe(4)

})

test('update new book', () => {
    let man: UserHasLaptopType & UserWithBooksType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'React', 'JS']
    }

    const copyMan = updateBookUser(man, 'JS', 'TS')

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).not.toBe(copyMan.books)
    expect(copyMan.books[3]).toBe('TS')
    expect(man.books.length).toBe(4)

})

test('update skills man', () => {
    let man: UserHasLaptopType & UserWithBooksType & SkillsManType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'React', 'JS'],
        skills: [23, 15, 45, 98]
    }

    const copyMan = updateSkillsUser(man, 15, 32)

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).toBe(copyMan.books)
    expect(copyMan.skills[1]).toBe(32)
    expect(man.skills[1]).toBe(15)

})

test('remove book', () => {
    let man: UserHasLaptopType & UserWithBooksType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'JS', 'React']
    }

    const copyMan = removeBookUser(man, 'JS')

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).not.toBe(copyMan.books)
    expect(man.books.length).toBe(4)
    expect(copyMan.books.length).toBe(3)
    expect(copyMan.books[2]).toBe('React')
})

test('add company', () => {
    let man: UserHasLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'JS', 'React'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'ÍT'}]
    }

    const copyMan = addNewCompanyUser(man, {id: 3, title: 'Arriva'})

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).toBe(copyMan.books)
    expect(man.companies.length).toBe(2)
    expect(copyMan.companies.length).toBe(3)
   expect(copyMan.companies[2].title).toBe('Arriva')
})

test('update company', () => {
    let man: UserHasLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Kate',
        hair: 20,
        address: {
            city: 'Covir',
            house: 12
        },
        laptop: {
            title: 'Zenbook',
            model: 'B23DZ'
        },
        books: ['CSS', 'HTML', 'JS', 'React'],
        companies: [{id: 1, title: 'Eпам'}, {id: 2, title: 'ÍT'}]
    }

    const copyMan = updateNewCompanyUser(man, 1, 'Epam')

    expect(man).not.toBe(copyMan)
    expect(man.address).toBe(copyMan.address)
    expect(man.books).toBe(copyMan.books)
    expect(man.companies).not.toBe(copyMan.companies)
    expect(man.companies[0].title).toBe('Eпам')
    expect(copyMan.companies[0].title).toBe('Epam')
})

test('update company2', () => {

    let companies = {
        'Kate' : [{id: 1, title: 'Eпам'}, {id: 2, title: 'Google'}],
        'Marina' : [{id: 1, title: 'Fuck'}, {id: 2, title: 'ÍT'}]
    }

  const companyCopy = updateNewCompany(companies, 'Kate', 1, 'EPAM')


    expect(companies).not.toBe(companyCopy)
    expect(companies['Kate']).not.toBe(companyCopy['Kate'])
    expect(companies['Marina']).toBe(companyCopy['Marina'])
    expect(companies['Kate'][0].title).toBe('Eпам')
    expect(companyCopy['Kate'][0].title).toBe('EPAM')
})
export type ManType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type UserHasLaptopType = ManType & {
    laptop: LaptopType
}

export type LaptopType = {
    title: string
    model?: string
}

export type UserWithBooksType = ManType & {
    books: Array<string>
}

export type SkillsManType = ManType & {
    skills: Array<number>
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

type CompanyType = { id: number, title: string }


export function icreaseAge(u: ManType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserHasLaptopType, city: string) {

    const copy = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    return copy
}

export function upgradeUserLaptop(u: UserHasLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function upgradeManLaptopModel(u: UserHasLaptopType, model: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, model: model
        }
    }
}

export function moveUserToOtherHouse(u: UserHasLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house: house
        }
    }
}

export function addNewBookUser(u: UserHasLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export function updateBookUser(u: UserHasLaptopType & UserWithBooksType, oldBooks: string, updateBooks: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBooks ? updateBooks : b)
    }

    /* return {
         ...u,
         books: u.books.map(b => {
             if (b === oldBooks) {
                 return updateBooks
             } else {
                 return b
             }
         })
     }*/
}

export function updateSkillsUser(u: UserHasLaptopType & UserWithBooksType & SkillsManType, oldSkil: number, newSkil: number) {
    return {
        ...u,
        skills: u.skills.map(b => b === oldSkil ? newSkil : b)
    }
}

export function removeBookUser(u: UserHasLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addNewCompanyUser(u: UserHasLaptopType & UserWithBooksType & WithCompaniesType, newCompany: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateNewCompanyUser(u: UserHasLaptopType & UserWithBooksType & WithCompaniesType, id: number, newName: string) {
    return {
        ...u,
        companies: u.companies.map(b => b.id === id ? {...b, title: newName} : b)
    }
}

export function updateNewCompany(companies: { [key: string]: Array<CompanyType> }, userName: string, companyID: number, newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)

    return companyCopy
}
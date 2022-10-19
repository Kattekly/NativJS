export type ManType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type UserHasLaptopType = ManType & {
laptop: LaptopType
}

export type LaptopType = {
    title: string
}

export function icreaseAge(u: ManType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
}

export function moveUser (u: UserHasLaptopType, city: string) {
    const copy = {
        ...u
    }
    copy.address = {...copy.address, city: city}
    return copy
}
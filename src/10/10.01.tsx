export type ManType = {
    name: string
    hair: number
    address: {title: string}
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
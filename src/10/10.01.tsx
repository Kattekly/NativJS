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

export function upgradeUserLaptop(u:UserHasLaptopType,  laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function upgradeManLaptopModel (u:UserHasLaptopType, model: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, model: model
        }
    }
}
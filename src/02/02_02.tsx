export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AdressType

}
export type AdressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}
 export type GovernmentBuildingType = {
     type: "HOSPITAL" | "FIRE-STATION"
     budget: number
     staffCount: number
     address: AdressType
 }
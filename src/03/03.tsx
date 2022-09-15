import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";
export function addSkill(st: StudentType, skill: string) {
    st.technologies.push({id: new Date().getTime(),
    title: skill
    })
}
export function makeStudentActiv(s: StudentType) {
s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget += budget;
}


export const repairHouse = (houseType: HouseType) => {
houseType.repaired = true;
}
export const toFireStaff = (building: GovernmentBuildingType, staffToFire: number) => {
building.staffCount -= staffToFire;
}

export const toHireStaff= (building: GovernmentBuildingType, staffToHire: number) => {
    building.staffCount += staffToHire;
}
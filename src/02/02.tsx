export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
technologies: Array<TechType>
}
type LocalSityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalSityType
}

type TechType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: "Kate",
    age: 26,
    isActive: true,
    address: {
        streetTitle: "Motory",
        city: {
            title: "Rybinsk",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
console.log(student.address.city.title)
console.log(student.technologies[2].title)
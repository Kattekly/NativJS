function increateUser (user: UserType) {
    user.age++
}

type UserType = {
    name: string
    age: number
}

let userss: UserType = {
    name: "Kate",
    age: 26
}


function increateUser (user: UserType) {
    user.age = user.age + 1;
}

type UserType = {
    name: string
    age: number
}

test ("test", () => {
    let user: UserType = {
        name: "Kate",
        age: 26
    }

    increateUser(user)

    expect(user.age).toBe(27)
})

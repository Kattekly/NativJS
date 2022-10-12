function increateUser (user: UserType) {
    user.age = user.age + 1;
}

type UserType = {
    name: string
    age: number
}

test ("test", () => {
    let users = [{
        name: "Kate",
        age: 26
    },
        {
            name: "Kate",
            age: 26
        }
    ]

    var admin = users
    admin.push({name: "hhh", age: 10})
expect(users[2]).toEqual({name: "hhh", age: 10})

})

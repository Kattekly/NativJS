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

   let admin = users
    admin.push({name: "hhh", age: 10})
expect(users[2]).toEqual({name: "hhh", age: 10})

})



test ("array test", () => {
    let usersCount = 'Kate'
    let adminCount = usersCount
    expect(adminCount).toEqual('Kate')
})

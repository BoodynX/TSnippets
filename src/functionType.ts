type userFactory = (name: string, age: number) => User

class User {
    private readonly name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    introduction() {
        console.log('My name is ' + this.name)
    }
}

let genericUserMaker: userFactory = (name: string, age: number) => {
    return new User(name, age)
}

function makeJoe(factory: userFactory, age: number): User {
    return factory('Joe', age)
}

let joe = makeJoe(genericUserMaker, 6)

console.log(joe)

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "example@gmail.com", "123")

// chai.addCourse()

const tea = new User("tea")

// tea.logMe()

// chai.logMe()

console.log(chai instanceof User);
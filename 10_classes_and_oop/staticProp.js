class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const tanix = new User("tanix")

// console.log(tanix.createId()); 

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone", "i.phone@gmail.com")

iPhone.logMe();

console.log(iPhone.createId());
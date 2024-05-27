const user = {
    username: "Tanishq",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Tanishq", 7, true)
const userTwo = new User("Tnix", 8, false)
console.log(userOne);
console.log(userTwo);
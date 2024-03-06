// const gitUser = new Object()

const gitUser = {}

gitUser.id = "456def"
gitUser.name = "Baigan"
gitUser.isLoggedIn = false

// console.log(gitUser);

const regUser = {
    email: "abc@gmail.com",
    fullname:  {
        userfullname: {
            firstname: "T",
            lastname: "R"
        }
    }
}
// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "def@gmail.com"
    },
    {
        id: 1,
        email: "def@gmail.com"
    },
    {
        id: 1,
        email: "def@gmail.com"
    },
    {
        id: 1,
        email: "def@gmail.com"
    },
]
users[1].email
// console.log(gitUser);

// console.log(Object.keys(gitUser));
// console.log(Object.values(gitUser));
// console.log(Object.entries(gitUser));

// console.log(gitUser.hasOwnProperty('name'));

const course = {
    cname: "js in hindi",
    price: "99",
    teacher: "HC"
}

const{teacher: teach} = course

console.log(teach);

// {
//     name: "t",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


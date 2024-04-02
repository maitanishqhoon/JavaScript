const myObj = {
    game1 : 'Far cry',
    game2 : 'NFS',
    game3 : 'Cricket 07',
    game4 : 'GTA',
    game5 : 'Watchdogs'
}
for (const key in myObj) {
    console.log(`${key} for shortcut is ${myObj[key]}`);
}

// Map object is not iterable so it cannot be used in for in loop
function gettUserData(callback) {

    alert(" ugu horeyn buttonka ")
    setTimeout(() => {
        const user={ id:252, name: "yuusuf" ,country: "somaalia"}
        callback(user)
    }, 2000);
    
}

console.log( " xogta ka  imaaneysi datada");


gettUserData(function (user) {
    console.log(user);
})
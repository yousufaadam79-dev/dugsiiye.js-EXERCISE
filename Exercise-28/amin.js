function fachUseData() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const succses= true;
            if (succses) {
                resolve({ country:'somaalia ' , id: 22, name: 'yuusuf'})
            }else {
                reject( 'failed data')
            }
        }, 3000);
    })
}

async function displayUserData() {
    const user= await fachUseData();
    console.log(user);
    
}
displayUserData();
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

// console.log('not data');

fachUseData()

.then ((data)  => console.log('data:', data))

.catch (error => console.log(" Error:", error)
)

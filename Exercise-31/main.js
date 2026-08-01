// // const { cache } = require("react");

// async function fachData() {

//     try {
//          console.log("start daata");

//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');


//     // console.log(response);
    
//     if (!response.ok) {
//         throw new Error(`HTTP error!  status ${response.status}`);
        
        
//     }

//     // shaqada xigto
//     const data = await response.json();

//     console.log(data);
    
    
//     } catch (error) {
//         console.log(error);
        
        
//     };

// }
// fachData()



async function userdata() {
    try {
        console.log("data uu USER ");

        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);

        if (!response.ok) {
            throw new Error(`HTTP error! status ${
                response.status
            }`);

            const user = await response.json();

            console.log("list of users:" ,user);
            
            
            
        }
        
        
    } catch (error) {
        console.error("qalad ayaa ka jiro code kaaga users:", error);
        
        
    }
}
userdata()
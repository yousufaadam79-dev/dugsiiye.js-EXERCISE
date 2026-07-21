const  Teachers=[
    {Name: 'hamuuda',  Age:28 , country:'indonosia'},
    {Name: 'omar tood',  Age:24 , country:'kenya'},
    {Name: 'khaalid',  Age:22 , country:'somalia'}
];

for(let Teacher of  Teachers){
    // console.log(Teachers );
    for(const key in Teacher){
        console.log(key + "," ,Teacher[key]);
        
    }
        console.log("---");
        
}
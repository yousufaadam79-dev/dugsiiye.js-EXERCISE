let car  ={
   model:" BMW X7",
   mike:2025,
   year:2026,
   cars : function () {
    console.log('The car has started' , this.model);
    
   }

};

console.log(car);
car.cars()

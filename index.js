const rectangle = require('./rectangle');
var rect=require('./rectangle');

function solveRect(l,b){

    console.log("solving for the rectangle l="+l+"and b="+b);


    //using call back funtion implementation

    rect(l,b,(error,rectangle)=>{
        if(error){
            console.log("ERROR:"+error);
        }else{
            console.log("The area of the rectangle of dimenasion l="+"and b="+b+" is "+rectangle.area());
            console.log("The Perimeter of the rectangle of dimenasion l="+"and b="+b+" is "+rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to rect()");
    //node module implementaion
    // if(l<=0 && b<=0){
    //    console.log("Rectangle dimensions should be greater l="+l+"and b="+b);
    // }else{
    //     console.log("Area of the rectangle is="+rect.area(l,b));
    //     console.log("Perimeter of the Rectangle is ="+rect.perimeter(l,b));
    // }
}

solveRect(7,8);
solveRect(10,20);
solveRect(0,-3);
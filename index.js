var rect=require('./rectangle');

function solveRect(l,b){

    console.log("solving for the rectangle l="+l+"and b="+b);

    if(l<=0 && b<=0){
       console.log("Rectangle dimensions should be greater l="+l+"and b="+b);
    }else{
        console.log("Area of the rectangle is="+rect.area(l,b));
        console.log("Perimeter of the Rectangle is ="+rect.perimeter(l,b));
    }
}

solveRect(7,8);
solveRect(10,20);
//using callback function 

module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0){
            setTimeout(()=>
            callback(new Error("Rectangle dimensions show are less then zero value of l"+x +"and b"+y),
            null)
            ,2000);
    }else{
            
        setTimeout(()=>callback(null,
            {
                // perimeter:(x,y)=>(2*(x+y)),
                // area:(x,y)=>(x*y)
                perimeter:()=>(2*(x+y)),
                area:()=>(x*y)

            }),
            2000);
    }

}



//using node module way
// exports.perimeter=(x,y)=>(2*(x+y)),
// exports.area=(x,y)=>(x*y)
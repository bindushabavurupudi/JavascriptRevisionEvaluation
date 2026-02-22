function rateLimiter(limit, interval){
    let counter = 0;
    let timer = null;
    return function (){
        if(counter < limit){
             counter++;
             if(!timer){
                timer = setTimeout(()=>{
                    timer = null;
                    counter = 0;
                }, interval);
             }
             return "Call Allowed"
            }
            else return "Call limit exceeded";
    }

}
let fun = rateLimiter(2, 1000);
console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());

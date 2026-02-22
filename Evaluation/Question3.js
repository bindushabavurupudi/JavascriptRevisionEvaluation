function mySetInterval(callback, delay){
    let id;
    function repeat(){
        callback();
        id = setTimeout(repeat, delay);
    }
    id = setTimeout(repeat, delay);
    return id;
}

function myClearInterval(id){
    clearTimeout(id);
}

// let x = setTimeout(()=>{
//     console.log(30);
// }, 0)
// console.log(x)

let id = mySetInterval(()=>{console.log("Timer Running")}, 1000);

setTimeout(()=>{
    myClearInterval(id);
}, 5000);

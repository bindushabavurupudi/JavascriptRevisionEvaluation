function rateLimiter(limit, interval) {
    let counter = 0;
    return function () {
        if (counter < limit) {
            counter++;
            setTimeout(() => {
                counter = 0;
            }, interval);
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

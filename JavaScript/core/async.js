setTimeout(() =>{
    console.log("Hey this is async code");
}, 1000);
console.log("Hey this is sync code");

const fetchdata = () => {
    const process = new Pro((response, err) =>{
        setTimeout(() => {
            response("Taddaaaa It's Done!");
        }, 1000); 
    });
    return process;
};


setTimeout(() => {
    console.log("async code is almost done")
    fetchdata().then(arg => {   //can be used when multiple responses are expected
        console.log(arg);
        return fetchdata();    //this is used for the next then() function if multiple then are used
    })
    .then(arg2 => {
        console.log(arg2)
    });
}, 1500);
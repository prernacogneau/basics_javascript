
function func1(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const error = true;
            if (!error){
                console.log("promise rsolved")
                resolve();
            }
            else{
                console.log("promise not kept")
                reject();
            }
        }, 2000);
    })
}

// calling the function

func1().then(function(){
    console.log("Thanks for keeping the promise")
}).catch(function(error){
    console.log("error occured " + error)
})
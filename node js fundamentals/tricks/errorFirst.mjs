function async(cb) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            cb(null, a);
        } catch (error) {
            cb(error);
        }
    }, 1000);
}


    async(((error, data) => {
        if (error) {
            console.error("We got an error");
            console.error(error);
            // throw error; //Does not work with async functions
            return false;
        }
    
        console.log("We got the data " + data);
    }))


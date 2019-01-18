const db = require('./models');

db.sync({force:true})

.then((result)=>
console.log(result))

.catch((error)=>{
    console.log(error);
})

db.close();
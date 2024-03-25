const mongoose= require('mongoose');


mongoose.connect("mongodb://localhost/mongotube",{useNewUrlParser:true })
before((done)=>{
    mongoose.connection
    .once("open", ()=>{
        done();
    })
    .on("error", (error)=>{
        console.log("your error",error);
    })

});
 beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        done();
        console.log("drop sucessful");
    });
 });
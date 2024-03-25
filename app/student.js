const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const studentSchema=new Schema({
      name:String
});

const Person= mongoose.model("student",studentSchema);

//export
module.exports=Person;
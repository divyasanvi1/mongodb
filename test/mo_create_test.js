const student=require("../app/student")
const assert= require("assert")

describe("createTest",()=>{
   it("create a user in DB" ,()=>{
      // assert(true);
      const divya=new student({name: "divya"});
      divya.save()
      .then(()=>{
        assert(!divya.isNew);
      })
      .catch(()=>{
        console.log("error");
      })
   });
});
//we cannot compare object id as it is in bson form
describe("Read Tests", (done)=>{
  let reader;
  beforeEach((done)=>{
    reader =student({name :"Reader"})
    reader.save()
    .then(()=>{
      done();
    })
  })

  it("Read a user: Reader",(done)=>{
     student.find({name:"Reader"})
     .then((students)=>{
      assert(reader._id.tostring()===students[0]._id.tostring())
      done();
     })
  })
})
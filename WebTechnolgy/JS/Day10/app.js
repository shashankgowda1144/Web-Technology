//  normal object 
let student = {
    name : "shashank",
    age : 22,
    address : {
        city : "Banglore",
        pincode : 560078
    },
    printDetails : function() {
        console.log("Print student details");
    }
}
console.log(student);
console.log(typeof student);    //object

//convert the normal object to JSON Stringified Obj using [JSON.stringify]

let stringified_obj = JSON.stringify(student)
console.log(stringified_obj);
console.log(typeof stringified_obj);   //String
 
//convert the JSON stringified obj to normal obj using  [JSON.pare]
let res = JSON.parse(stringified_obj)
console.log(res);
console.log(typeof res);   //object

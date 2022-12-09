// Program to understand JSON parsing

//Correct JSON
let JSON_string = '{"name":"kaushal"}';
let JSON2_string = "{\"name\":\"kaushal\"}";

// Incorrect JSON
let JSON1_string = '{name:kaushal}'

// Converting into JS Object
let obj = JSON.parse(JSON_string);

//Printing the type of the obj
console.log("Type of obj: " + typeof(obj));
console.log("Type of JSON Obj: "+typeof(JSON_string));





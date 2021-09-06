let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;
console.log(myObj);
console.log(myObj.foo)

// The second example shows all keys while the first only shows the object's own keys

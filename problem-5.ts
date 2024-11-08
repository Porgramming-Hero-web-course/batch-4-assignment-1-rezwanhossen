{
  const getProperty = <T, Y extends keyof T>(obj: T, ele: Y): T[Y] => {
    return obj[ele];
  };
  const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));
  // console.log(getProperty(person, "age"));
}

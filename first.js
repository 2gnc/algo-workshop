const incoming = [
  {name: "first", value: 1},
  {name: "second", value: 2},
]

const make = (arr) => {
  const obj = {};

  arr.map((item) => {
    if (!obj[item.name]) {
      obj[item.name] = item.value;
    } 
  });
  
  return obj;
}

const xx = make(incoming);

console.log(xx);
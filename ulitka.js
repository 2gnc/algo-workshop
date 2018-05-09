// построить спираль

const roo = document.getElementById('second');
const num = 4;

const ulitka = (root, number) => {
  // подготовим двухмерный массив
  const master = [];
  for (let i = 0; i < number; i++) {
    const arr = [];
    master.push(arr);
  }
  // подготовим объект
  const obj = {};
  for(let i = 0; i < number; i++) {
    for (let k = 0; k < number; k++) {
      const temp = i.toString() + k.toString();
      obj[temp] = 0;
    }
  }
  const numbers = [];
  for (let i = 1; i <= number * number; i++) {
    numbers.push(i);
  }

  return master;
}

const uli = ulitka(null, 5);
console.log(uli);

// const drawSpiral = (root, num) => {
//   const total = num * num;
//   const masterArr = [];
//   for (let i = 0; i < num; i++) {
//     const subArr = new Array();
//     masterArr.push(subArr);
//   }
//   const numbers = [];
//   for (let i = 1; i < total + 1; i++) {
//     numbers.push(i);
//   }

//   let rowsCount = 0;
//   for (let i = 0; i < masterArr.length + 1; i += 1) {
//     if (rowsCount === 0) {
//       for (let k = 1; k < num +1; k += 1) {
//         masterArr[i].push(k);
//       }
//     }
//     rowsCount += 1;
//   }

//   //console.log(numbers);
//   //console.log(masterArr);
// }

//drawSpiral(null, 4);
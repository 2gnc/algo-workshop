// построить спираль

const roo = document.getElementById('second');

const drawSpiral = (root, num) => {
  const total = num * num;
  const masterArr = [];
  for (let i = 0; i < num; i++) {
    const subArr = new Array();
    masterArr.push(subArr);
  }
  const numbers = [];
  for (let i = 1; i < total + 1; i++) {
    numbers.push(i);
  }

  let rowsCount = 0;
  for (let i = 0; i < masterArr.length + 1; i += 1) {
    if (rowsCount === 0) {
      for (let k = 1; k < num +1; k += 1) {
        masterArr[i].push(k);
      }
    }
    rowsCount += 1;
  }

  console.log(numbers);
  console.log(masterArr);
}

drawSpiral(null, 4);
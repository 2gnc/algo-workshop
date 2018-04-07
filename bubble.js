// реализация сортировки пузырьком
const arr = [9, 15, 80, 2, 0, 5, 1, 8]; 

const sortIter = (uns) => {
  let needNext = false;
  let steps = uns.length;
  for (let i = 0; i < steps; i++) {
    if (uns[i] > uns[i+1]) {
      needNext = true;
      const tmp = uns[i];
      uns[i] = uns[i+1];
      uns[i+1] = tmp;
    }
  }
  return needNext;
}

const bubbleSort = (array) => {
  let x;
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    x = sortIter(array);
    count += 1;
    if (x === false) {
      break;
    }
  }
  console.log('результат: ', array, 'итераций: ', count);
}

bubbleSort(arr);
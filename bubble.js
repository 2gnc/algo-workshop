// реализация сортировки пузырьком
const arr = [9, 100, 80, 14, 2, 0, 5, 1, 8];
const arr2 = [09, 0, 880, 14, 2, 99, 5, 100, 80];

class BubbleSorter {

  iteration(uns) {
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

  sort(array) {
    let x;
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
      x = this.iteration(array);
      count += 1;
      if (!x) {
        break;
      }
    }
    console.log('результат: ', array, 'итераций: ', count);
  }

}

const sorter = new BubbleSorter();
sorter.sort(arr);
sorter.sort(arr2);

(() => {
  console.log('=== бинарный поиск в отсортированном массиве ===');
  
  const makeArr = (num) => {
    const arr = [];
    for(i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  }

  const arr = makeArr(500);

  const bSearch = (int, arr) => {
    let selection = [...arr];
    let lastIdx = selection.length - 1;

    if (arr[arr.length - 1] < int) {
      return 'not found'
    }

    let i;
    let middle;


    while (lastIdx >= 0 && int !== selection[middle]) {
      middle = lastIdx / 2 === 0.5 ? 0 : Math.round(lastIdx / 2);

      if (int === selection[middle]) {
        i = selection[middle];
        break;
      } else if (int < selection[middle]) {
        selection = selection.splice(0, middle);
        lastIdx = middle;
      } else {
        selection = selection.splice(middle, selection[selection.length - 1]);
        lastIdx = middle;
      }
    }
    return i ;
  }

  console.log('результат: индекс', bSearch(5, arr));

})();
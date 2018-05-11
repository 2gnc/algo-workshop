(() => {
  const arr = [1, 55, 11, 99, 500, 57, 14, 0, 90, 36, 9];
  
  const sort = (arr) => {
    const res = [...arr];
    let lastSortedIdx = 0;
    while (lastSortedIdx <= res.length - 1) {
      for (let i = lastSortedIdx; i < res.length; i++ ) {
        for (let j = lastSortedIdx; j >= 0; j--) {
          if (res[i] < res[j]) {
            const tmp = res[j];
            res[j] = res[i];
            res[i] = tmp;
          }
        }
      };
      lastSortedIdx ++;
    }
    return res;
  }
  console.log('=== сортировка вставками ===');
  console.log(sort(arr));
})();
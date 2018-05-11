(() => {
  console.log('=== Сортировка выбором ===');
  const arr = [1, 55, 11, 99, 500, 57, 14, 0, 90, 36, 9];

  const sort = (arr) => {
    const temp = [... arr];
    const res = [];
    const last = res.length - 1;
    let unsortedLength = temp.length - 1;

    while (unsortedLength >= 0) {
      const min = Math.min(...temp);
      const idx = temp.indexOf(min);
      res.push(min);
      temp.splice(idx, 1);
      unsortedLength --;
    }
    return res;
  }

  console.log(sort(arr));

  console.log('=== Сортировка выбором 2 ===');

  const sort2 = (arr) => {
    const res = [...arr];
    let lastUnsortedIdx = res.length - 1;
    while (lastUnsortedIdx >= 0) {
      let min = Infinity;
      let minI = null;
      for (let i = 0; i <= lastUnsortedIdx; i++) {
        if (res[i] < min) {
          min = res[i];
          minI = i;
        }
      }
      res.splice(Infinity, 0, res[minI]);
      res.splice(minI, 1);
      lastUnsortedIdx --;
    }
    return res;
  }
  
  console.log(sort2(arr));

  console.log('=== Сортировка выбором 3 ===');

  const sort3 = (arr) => {
    const res = [...arr];
    const lastIdx = res.length - 1;
    let currIdx = 0;
    while (currIdx <= lastIdx) {
      let min = Infinity;
      let idx = null;
      for (let i = currIdx; i <= lastIdx; i++) {
        if (res[i] < min) {
          min = res[i];
          idx = i;
        }
      }
      const tmp = res[currIdx];
      res[currIdx] = min;
      res[idx] = tmp;
      currIdx ++;
    }
    return res;
  }
  
  console.log(sort3(arr));

  console.log('тесты sort');
  const t1 = [1, 4, 2, 3];
  const t2 = sort(t1);
  if (expect(t2[0]).toBe(1) &&
  expect(t2[1]).toBe(2) &&
  expect(t2[2]).toBe(3) &&
  expect(t2[3]).toBe(4)) {
    console.log('тест 1 пройден');
  }; 

  const t3 = [0, 0, 0];
  const t4 = sort(t3);
  if (expect(t4[0]).toBe(0) &&
  expect(t4[1]).toBe(0) &&
  expect(t4[2]).toBe(0)) {
    console.log('тест 2 пройден');
  };

  const t5 = [3, 2, 1, 4];
  const t6 = sort(t5);
  if (expect(t6[0]).toBe(1) &&
  expect(t6[1]).toBe(2) &&
  expect(t6[2]).toBe(3) &&
  expect(t6[3]).toBe(4)) {
    console.log('тест 3 пройден');
  };

  console.log('тесты sort2');
  const x1 = [1, 4, 2, 3];
  const x2 = sort2(x1);
  if (expect(x2[0]).toBe(1) &&
  expect(x2[1]).toBe(2) &&
  expect(x2[2]).toBe(3) &&
  expect(x2[3]).toBe(4)) {
    console.log('тест 1 пройден');
  }; 

  const x3 = [0, 0, 0];
  const x4 = sort2(x3);
  if (expect(x4[0]).toBe(0) &&
  expect(x4[1]).toBe(0) &&
  expect(x4[2]).toBe(0)) {
    console.log('тест 2 пройден');
  };

  const x5 = [3, 2, 1, 4];
  const x6 = sort2(x5);
  if (expect(x6[0]).toBe(1) &&
  expect(x6[1]).toBe(2) &&
  expect(x6[2]).toBe(3) &&
  expect(x6[3]).toBe(4)) {
    console.log('тест 3 пройден');
  };

  console.log('тесты sort3');
  const z1 = [1, 4, 2, 3];
  const z2 = sort3(z1);
  if (expect(z2[0]).toBe(1) &&
  expect(z2[1]).toBe(2) &&
  expect(z2[2]).toBe(3) &&
  expect(z2[3]).toBe(4)) {
    console.log('тест 1 пройден');
  }; 

  const z3 = [0, 0, 0];
  const z4 = sort3(z3);
  if (expect(z4[0]).toBe(0) &&
  expect(z4[1]).toBe(0) &&
  expect(z4[2]).toBe(0)) {
    console.log('тест 2 пройден');
  };

  const z5 = [3, 2, 1, 4];
  const z6 = sort3(z5);
  if (expect(z6[0]).toBe(1) &&
  expect(z6[1]).toBe(2) &&
  expect(z6[2]).toBe(3) &&
  expect(z6[3]).toBe(4)) {
    console.log('тест 3 пройден');
  };

})()
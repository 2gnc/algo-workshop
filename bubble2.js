(function() {
  /**
  * Пузырьковая сортировка
  * для примера приведена реализация для сортировки чисел. 
  **/

  /**
  * @func sort Функция сортировки.
  * @param {array} arr неотсортированный массив
  * @returns {array} отсортированный массив
  **/

  const sort = (arr) => {
    const result = [...arr];
    let sorted = true;
    let toSort = result.length -1;
    while (sorted) {
      sorted = false;
      for (let i = 0; i < toSort; i++) {
        if ( result[i] > result[i+1] )  {
          const temp = result[i];
          result[i] = result[i+1];
          result[i+1] = temp;
          sorted = true;
        };
      };
      toSort--;
    }
    return result;
  }

  const arr = [1, 55, 11, 99, 500, 57, 14, 0, 90, 36, 9];

  console.log('=== Пузырьковая сортировка вариант 2 ===');
  console.log(sort(arr));

  /**
   * тесты
   */
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
  const t6 = sort(t1);
  if (expect(t6[0]).toBe(1) &&
  expect(t6[1]).toBe(2) &&
  expect(t6[2]).toBe(3) &&
  expect(t6[3]).toBe(4)) {
    console.log('тест 3 пройден');
  }; 
})();
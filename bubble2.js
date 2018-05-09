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
  while (sorted) {
    sorted = false;
    for (let i = 0; i < result.length - 1; i++) {
      if ( result[i] > result[i+1] )  {
        const temp = result[i];
        result[i] = result[i+1];
        result[i+1] = temp;
        sorted = true;
      };
    };
  }
  return result;
}

const array = [55, 11, 57, 14, 90, 36, 9];

console.log(123, sort(array));

/**
 * тесты
 */
const t1 = [1, 2, 3];
const t2 = sort(t1);
if (expect(t2[0]).toBe(1) &&
expect(t2[1]).toBe(2) &&
expect(t2[2]).toBe(3)) {
  console.log('тест 1 пройден');
}; 

const t3 = [0, 0, 0];
const t4 = sort(t3);
if (expect(t4[0]).toBe(0) &&
expect(t4[1]).toBe(0) &&
expect(t4[2]).toBe(0)) {
  console.log('тест 2 пройден');
};

const t5 = [3, 2, 1];
const t6 = sort(t1);
if (expect(t6[0]).toBe(1) &&
expect(t6[1]).toBe(2) &&
expect(t6[2]).toBe(3)) {
  console.log('тест 3 пройден');
}; 
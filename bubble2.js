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

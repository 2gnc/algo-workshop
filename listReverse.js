(() => {
  console.log('=== Разворот односвязанного списка ===');

  const f = { value: 6, next: null };
  const e = { value: 5, next: f };
  const d = { value: 4, next: e };  
  const c = { value: 3, next: d };
  const b = { value: 2, next: c };
  const a = { value: 1, next: b };

  const list = [];
  list.push(f);
  list.push(e);
  list.push(d);
  list.push(c);
  list.push(b);
  list.push(a);
  

  const printList = (arr) => {
    for (let i = arr.length - 1; i >= 0 ; i--) {
      console.log(`val: ${arr[i].value}, next: ${arr[i].next ? arr[i].next.value : 'null'}`);
    }
  }

  const reverseList = (arr) => {
    arrReversed = [...arr];

    let x = arrReversed.length - 1 ;
    
    const tmp = arrReversed[x];
    arrReversed[x].next = null;
    arrReversed[0].next = tmp;

    for (let i = 1; i < arrReversed.length - 1; i++) {
      x--;
      arrReversed[i].next = arrReversed[x];
    }
    return arrReversed;
  }

  console.log('== исходный список ==');
  printList(list);

  console.log('== развернутый список ==');
  printList(reverseList(list));

})();
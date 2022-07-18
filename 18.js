const arr1 = [1, 2, 3, 4, 5, 6, 2];
const arr2 = [5, 2, 3, 4, 1, 1, 6];
 // Create object like {1: 1, 2: 2, 3: 1 ...} , the number of frequency of an element in the array.
 const obj1 = arr1.reduce((a, c) => {
    a[c] ||= 0;
    a[c]++;
    return a;
  }, {});
 
  console.log(obj1);
 const obj2 = arr1.reduce((a, c) => {
    a[c] ||= 0;
    a[c]++;
    return a;
  }, {});
  console.log(obj2);
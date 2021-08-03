// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');

var arr1 = [
  { name: 'prasad', age: 25, study: 'Btech', Location: 'Nsp' },
  { name: 'suresh', age: 27, study: 'degree', Location: 'bvm' },
  { name: 'santosh', age: 11, study: '5th', Location: 'svm' },
  { name: 'venkata', age: 9, study: '3rd', Location: 'mvr' },
  { name: 'ramesh', age: 30, study: 'Btech', Location: 'Nsp' },
  { name: 'yv', age: 28, study: 'Btech', Location: 'kothota' },
  { name: 'nareah', age: 28, study: 'intermediate', Location: 'Kapm' }
];

var arr2 = arr1.filter(
  res => res.age>= 9 && res.study.toLowerCase()=== 'btech').map(res => {
    return{...res, age:30}
  })

console.log(arr2);

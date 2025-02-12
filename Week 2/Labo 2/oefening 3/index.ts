function sum(array:number[]) {
  return array.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);
}
console.log(sum([1,2,3,4,5]));

{
  const sumArray = (arr: number[]) => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  const array = sumArray([1, 2, 3, 4, 5]);
  // console.log(array);
}

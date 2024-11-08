{
  const removeDuplicates = <T>(arrar: T[]): T[] => {
    return arrar.filter((element, index) => arrar.indexOf(element) == index);
  };

  const array = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  // console.log(array);
}

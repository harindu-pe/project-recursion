function mergeSort(array) {
  // base
  if (array.length <= 1) return array;
  // recursion
  const midValue = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, midValue));
  const rightHalf = mergeSort(array.slice(midValue));
  return merge(leftHalf, rightHalf);
}

const merge = (leftArray, rightArray) => {
  const mergedCollection = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeElement = arrayWithMin.shift();
    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArray, rightArray);
};

console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5]));

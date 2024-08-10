export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const ele of array) {
    if (ele.hasOwnProperty(idx)) {
      array[idx] = appendString + ele;
    }

    idx += 1;
  }

  return array;
}

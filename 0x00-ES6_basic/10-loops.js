export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    if (array.hasOwnProperty(idx)) {
      array[idx] = appendString + value;
    }
  }

  return array;
}

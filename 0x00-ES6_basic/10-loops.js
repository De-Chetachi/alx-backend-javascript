export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const element of array) {
    array.splice(i, 1, appendString + element);
    i += 1;
  }

  return array;
}

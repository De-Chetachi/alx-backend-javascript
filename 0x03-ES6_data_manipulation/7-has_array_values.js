/* eslint-disable */
export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}


function hasValuesFromArray_b(set, array) {
  const subset = new Set(array);
  return subset.isSubsetOf(set);
}

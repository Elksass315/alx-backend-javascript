export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const v of array) {
    newArray.push(appendString + v);
  }
  return newArray;
}

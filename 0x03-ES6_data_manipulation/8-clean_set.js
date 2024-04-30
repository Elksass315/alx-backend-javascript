export default function cleanSet(set, startString) {
  const array = [];
  if (startString === '') return '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      array.push(item);
    }
  }
  const result = array.map((item) => item.replace(startString, '')).join('-');
  return result;
}

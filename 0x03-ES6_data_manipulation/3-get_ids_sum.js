export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) return [];

  return array.reduce((total, item) => total + item.id, 0);
}

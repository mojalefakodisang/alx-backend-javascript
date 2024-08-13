export default function getStudentIdsSum(arr) {
  if (!(Array.isArray(arr))) {
    return 0;
  }

  return arr.reduce((acc, curr) => acc + curr.id, 0);
}

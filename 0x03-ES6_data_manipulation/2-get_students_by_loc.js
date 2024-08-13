export default function getStudentsByLocation(arr, location) {
  if (!(Array.isArray(arr))) {
    return [];
  }

  return arr.filter((stud) => stud.location === location);
}

export default function updateStudentGradeByCity(arr, location, newGrades) {
  const res = arr
    .filter((stud) => stud.location === location)
    .map((x) => {
      const matchGrade = newGrades.filter((grade) => grade.studentId === x.id);
      const grade = matchGrade.length > 0 ? matchGrade[0].grade : 'N/A';

      return {
        ...x,
        grade,
      };
    });

  return res;
}

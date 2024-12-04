const getStudents = "SELECT * FROM student";
const getStudentsById = "SELECT * FROM student where id=$1";
const checkEmailExist = "SELECT s FROM student s where s.email=$1";
const addStudent = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)";

module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExist,
    addStudent
}
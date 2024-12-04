const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results)=> {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results)=> {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    pool.query(queries.checkEmailExist, [email], (error, results)=> {
        if (error) {
            console.error("Error checking if email exists:", error);
            return res.status(500).send("An error occurred while checking the email.");
        }
        

        if (results.rows.length) {
            res.send("email already exists");
        }

        else {
            pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
                if (error) throw error;
                res.send("student added successfully");
            })
        }
    });
};

module.exports = {
    getStudents,
    getStudentsById,
    addStudent
};
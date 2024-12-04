const Router = require("express");
const controller = require("./controller");
const router = new Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentsById);
router.post('/', controller.addStudent );

module.exports = router; 
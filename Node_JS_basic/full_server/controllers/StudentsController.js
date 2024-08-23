const readDatabase = require('../utils');
class StudentsController {
  getAllStudents(request, response) {
    const fields = readDatabase('path');
    console.log("This is the list of our students");
    return {"status": 200, "messsage": ""}
  }

}

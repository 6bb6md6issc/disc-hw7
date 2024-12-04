const express = require("express");
const studentRoutes = require('./src/student/routes');
const app = express();
const port = process.env.PORT;
app.use(express.json()); 


app.get('/', (req, res) => {
    res.write("Hello World");
    res.end();
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));
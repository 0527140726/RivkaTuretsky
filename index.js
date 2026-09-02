const express = require('express');
const courses = require('./courses');
const students = require('./students');

const app = express();
const PORT = 3000;

// נתיב ראשי: http://localhost:3000
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to our Express server',
    description: 'Server provides courses and students data'
  });
});

// נתיב קורסים: http://localhost:3000/courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// נתיב תלמידים: http://localhost:3000/students
app.get('/students', (req, res) => {
  res.json(students);
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`השרת פעיל בכתובת: http://localhost:${PORT}`);
});
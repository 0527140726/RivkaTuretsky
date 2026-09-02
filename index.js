import http from 'http';
import chalk from 'chalk';

// 1. הגדרת מערך הקורסים
const courses = [
  {
    id: 1,
    name: 'פיתוח ב-Node.js',
    description: 'קורס מקיף לבניית שרתי אינטרנט'
  },
  {
    id: 2,
    name: 'יסודות HTML ו-CSS',
    description: 'עיצוב ובניית דפי אינטרנט'
  },
  {
    id: 3,
    name: 'תכנות ב-JavaScript',
    description: 'למידת שפת התכנות של עולם ה-Web'
  }
];

// 2. יצירת השרת
const server = http.createServer((req, res) => {
  // הגדרת כותרת לתמיכה בעברית
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // הדפסה צבעונית בטרמינל בעת כניסה
  console.log(chalk.blue('--- התקבלה בקשה חדשה לשרת ---'));
  courses.forEach(course => {
    console.log(chalk.green.underline(`[ID: ${course.id}] `) + chalk.yellow(course.name));
  });

  // בנאית תשובת ה-HTML לדפדפן
  let htmlResponse = '<h1>רשימת קורסים</h1><ul>';
  courses.forEach(course => {
    htmlResponse += `<li><strong>${course.name}</strong>: ${course.description}</li>`;
  });
  htmlResponse += '</ul>';

  res.end(htmlResponse);
});

// 3. הפעלת השרת
const PORT = 3000;
server.listen(PORT, () => {
  console.log(chalk.green(`השרת פעיל בכתובת: http://localhost:${PORT}`));
});
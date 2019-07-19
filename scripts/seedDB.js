const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Courses collection and inserts the courses below

mongoose.connect(
  process.env.MONGODB_URI ||
  // "mongodb://localhost/reactreadinglist"
  "mongodb://localhost/reactincxosi"

);

const courseSeed = [
  {
    title: "React",
    // author: "40",
    progress: "40",
    date: new Date(Date.now())
  },
  {
    title: "Angular",
    progress: "75",
    date: new Date(Date.now())
  },
  {
    title: "Java",
    progress: "32",
    date: new Date(Date.now())
  },
  {
    title: "SQL",
    progress: "86",
    date: new Date(Date.now())
  }
];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(courseSeed))
db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(courseSeed))

  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

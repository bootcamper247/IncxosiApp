const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stuSchema = new Schema({
  title: { type: String, required: true },
  progress: { type: String, required: true },
//   author: { type: String, required: true },
  // synopsis: String,
  date: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", stuSchema);

module.exports = Student;


// const Book = mongoose.model("Book", stuSchema);

// module.exports = Book;

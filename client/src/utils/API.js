import axios from "axios";

export default {
  // Gets all courses
  getCourses: function() {
    let obj = axios.get("/api/courses");
    // alert("all books");
    return obj;
  },
  // Gets the courses for the given stu id
  getCourse: function(id) {
    alert("one book");
    return axios.get("/api/courses/" + id);
  },
  // Deletes the book with the given id
  deleteCourse: function(id) {
    return axios.delete("/api/courses/" + id);
  },
  // Saves a course to the database
  saveCourse: function(courseData) {
    return axios.post("/api/courses", courseData);
  }
};

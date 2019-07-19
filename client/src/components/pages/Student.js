import React, { Component } from "react";
import Hero from "../Hero";
import StudentCourseCard from "../StudentCourseCard";
import Wrapper from "../Wrapper";
// import student_courses from "../../student_courses.json";
import SmallImage from "../images/small.png"
import SubTitle from "../SubTitle";
import API from "../../utils/API";


class Student extends Component {
  // Setting this.state.friends to the friends json array
  state = {
     student_courses: []
  };

  componentDidMount() {
    this.loadStuCourses();
  }

  loadStuCourses = () => {
    // this.setState({student_courses});

    API.getCourses()
    .then(res => {
      this.setState({ student_courses: res.data })
    })
    .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Hero backgroundImage={SmallImage}>
          <h1>Incxosi</h1>
          <h2>A one to one coaching platform for those who like to help others</h2>
        </Hero>
        {/* <Container style={{ marginTop: 30 }}> */}
        <Wrapper>
          <SubTitle>My Current Courses {this.state.student_courses.length}</SubTitle>
          {this.state.student_courses.map(student_courses => (
            <StudentCourseCard
              id={student_courses.id}
              key={student_courses.id}
              name={student_courses.title}
              // progress={student_courses.author}
              progress={student_courses.progress}

            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Student;

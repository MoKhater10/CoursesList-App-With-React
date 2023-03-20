import { Component } from 'react';
import CourseForm from './Component/CourseForm';
import CourseList from './Component/CourseList';

class App extends Component {
  state = {
    courses: [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JQuery"}
    ],
    current:''
  }

  //UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  
  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current) {
      courses.push({ name: current });
      this.setState({
      courses,
      current: ""
    })
    }
  }

  //DeleteCourse 
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({courses})
  }

  //editCourse
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses})
  }
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
  return (
    <section className="App">
      <h2>Add Courses</h2>
      <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
      <ul>
        {this.state.courses.length > 0 ? courseList : <p className='msg'> Sorry : No Courses To Show ! Please Add New Course. </p>}
      </ul>
    </section>
  );
  }
}

export default App;

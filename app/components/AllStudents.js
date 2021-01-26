import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";

export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div id = 'students'>
        {this.props.students.length > 0
          ? this.props.students.map(student => {
              return (
                <div id = 'student' key = {student.id}>
                  <img id = 'images' src = {student.imageUrl} />
                  <div>{`${student.firstName} ${student.lastName}`}</div>
                </div>
            );
            })
          : "No Students"}
      </div>     

    );
  }
}

const mapState = (state) => state;

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
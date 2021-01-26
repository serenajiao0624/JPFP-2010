import axios from 'axios';

export const SET_STUDENTS = 'SET_STUDENTS';

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students
})

export const fetchStudents = () => {
  return async (dispatch) => {
    const students = (await axios.get('/api/students')).data;
    dispatch(setStudents(students))
  }
};

export default function studentsReducer(state = [], action) {
  if(action.type === SET_STUDENTS) {
    return action.students
  }
  return state
}
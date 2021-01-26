import axios from 'axios';

export const SET_CAMPUSES = 'SET_CAMPUSES';

export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses
})

export const fetchCampuses = () => {
  return async (dispatch) => {
    const campuses = (await axios.get('/api/campuses')).data;
    dispatch(setCampuses(campuses))
  }
};

export default function campusesReducer(state = [], action) {
  if(action.type === SET_CAMPUSES) {
    return action.campuses
  }
  return state
}
import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from '../redux/campuses'

export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses()
  }
  render() {
    return (
      <div id = 'campuses'>
        { this.props.campuses.length > 0 ?
          this.props.campuses.map( (campus, idx) => {
            return (
                <div id = 'campus' key = {idx}>
                  <img id = 'images' src= { campus.imageUrl } />
                  <div>{ campus.name }</div>
                </div>
            );
          })
          : 'No Campuses'
        }
      </div>
    );
  }
}

const mapState = (state) => state;

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
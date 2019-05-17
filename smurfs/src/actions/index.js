/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const SMURF_START = "SMURF_START";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_ERROR = "SMURF_ERROR";

export const smurfMe = () => dispatch => {
  dispatch({ type: SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({ type: SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SMURF_ERROR });
    });
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SMURF_ERROR, payload: err });
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

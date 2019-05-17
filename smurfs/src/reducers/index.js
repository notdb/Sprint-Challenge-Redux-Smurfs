/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURF_START,
  SMURF_SUCCESS,
  SMURF_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: "",
  adding_smurfs: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case SMURF_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        adding_smurf: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        adding_smurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        adding_smurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

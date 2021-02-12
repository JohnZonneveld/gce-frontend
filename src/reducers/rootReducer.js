import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  members: membersReducer,
  tours: toursReducer
});

function membersReducer(state = [], action) {
    let idx;
    switch (action.type) {
      case "ADD_MEMBER":
        return [...state, action.member];
   
      case "REMOVE_MEMBER":
        idx = state.findIndex(member => member.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }
 
  function toursReducer(state = [], action) {
    let idx;
    switch (action.type) {
      case "ADD_TOUR":
        return [...state, action.tour];
   
      case "REMOVE_TOUR":
        idx = state.findIndex(tour => tour.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }
export default rootReducer;
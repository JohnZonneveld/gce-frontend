function reducer(state = { members: []}, action) {
    let idx;
    switch (action.type) {
      case "FETCH_MEMBERS_SUCCESS":
        // debugger
        return {
          ...state,
          members: action.members
        }
        
      case "ADD_MEMBERS":
        debugger
        return [
          ...state,
          action.payload
        ]
      case 'UPDATE_MEMBER':
        debugger
        let indexOfMember = state.members.findIndex(member => member.id === action.member.id)
        const newArray = [...state.members]
        newArray[indexOfMember] = action.member
        
        return {
          ...state,
          members: newArray,
          isEditing: false,
          isUpdated: true
        }

      case "DELETE_MEMBER":
        debugger
        return state.members.filter((member) => member.id !== action.payload);
 
      case "ADD_TOUR":
        debugger
        return [...state, action.tour];
   
      case "REMOVE_TOUR":
        idx = state.findIndex(tour => tour.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }

  export default reducer
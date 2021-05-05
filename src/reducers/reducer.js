function reducer(state = { members: []}, action) {
    let idx;
    switch (action.type) {
      case "FETCH_MEMBERS_SUCCESS":
        debugger
        return {
          ...state,
          members: action.members
        }
        
      case "ADD_MEMBERS":
        return [
          ...state,
          action.payload
        ]
      case 'UPDATE_MEMBER':
        debugger
        let indexMember = state.members.findIndex(member => member.id === action.member.id)
        let updatedMember = action.member
        return {
          ...state.members.slice(0,indexMember),
          updatedMember,
          ...state.members.slice(indexMember + 1),
          isEditing: false,
          isUpdated: true
        }
        
      case "DELETE_MEMBER":
        return state.members.filter((member) => member.id !== action.payload);
 
      case "ADD_TOUR":
        return [...state, action.tour];
   
      case "REMOVE_TOUR":
        idx = state.findIndex(tour => tour.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }

  export default reducer
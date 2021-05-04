function reducer(state = { members: []}, action) {
    let idx;
    switch (action.type) {
      // case "FETCH_MEMBERS":
      //   return {...state, 
      //     members: action.payload,
      //     isLoading: false
      //   }
      
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
      case 'EDIT_MEMBER':
        return {
          ...state,
          member: action.member,
          loading: false,
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
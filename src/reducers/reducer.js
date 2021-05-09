function reducer(state = { members: []}, action) {
	let idx;
	switch (action.type) {
		case "FETCH_MEMBERS_SUCCESS":
			return {
				...state,
				members: action.members
			}

		case "CREATE_MEMBER_SUCCESS":
			debugger
			let tempMembers = state.members
				tempMembers.push(action.member)
				return {
					...state,
					members: tempMembers
				}

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

		case "DELETE_MEMBER_SUCCESS":
			debugger
			return {...state,
				members: state.members.filter((member) => member.id !== action.member.id)
			}

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
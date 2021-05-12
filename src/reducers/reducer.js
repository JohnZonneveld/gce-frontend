function reducer(state = { members: [], tours: []}, action) {
	let idx;
	switch (action.type) {
		case "FETCH_MEMBERS_SUCCESS":
			return {
				...state,
				members: action.members
			}

		case "CREATE_MEMBER_SUCCESS":
			let tempMembers = state.members
				tempMembers.push(action.member)
				return {
					...state,
					members: tempMembers
				}

		case 'UPDATE_MEMBER':
			let indexOfMember = state.members.findIndex(member => member.id === action.member.id)
			const updateMemberArray = [...state.members]
			updateMemberArray[indexOfMember] = action.member
			return {
				...state,
				members: updateMemberArray,
				isEditing: false,
				isUpdated: true
			}

		case "DELETE_MEMBER_SUCCESS":
			return {...state,
				members: state.members.filter((member) => member.id !== action.member.id)
			}

		case "FETCH_TOURS_SUCCESS":
			return {
				...state,
				tours: action.tours
			}

		case "CREATE_TOUR_SUCCESS":
			let tempTours = state.tours
				tempTours.push(action.tour)
				return {
					...state,
					tours: tempTours
				}
	
		case "REMOVE_TOUR":
			idx = state.findIndex(tour => tour.id === action.id);
			return [...state.slice(0, idx), ...state.slice(idx + 1)];

		case 'UPDATE_TOUR':
			let indexOfTour = state.tours.findIndex(tour => tour.id === action.tour.id)
			const updateTourArray = [...state.tours]
			updateTourArray[indexOfTour] = action.tour
			return {
				...state,
				tours: updateTourArray,
				isEditing: false,
				isUpdated: true
			}

		case "DELETE_TOUR_SUCCESS":
			return {...state,
				tours: state.tours.filter((tour) => tour.id !== action.tour.id)
			}
	
		default:
			return state;
	}
}

export default reducer
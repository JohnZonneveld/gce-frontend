export default function memberReducer(state = { members: []}, action) {
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

        default:
            return state;
    }
}

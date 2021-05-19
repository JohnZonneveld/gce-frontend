export default function memberReducer(state = [], action) {
    let idx;
    switch (action.type) {
		case "FETCH_MEMBERS_SUCCESS":
            debugger
			return [
				...state, ...action.members
            ]

		case "CREATE_MEMBER_SUCCESS":
            debugger
			// let tempMembers = state
			// 	tempMembers.push(action.member)
            return [
                ...state,
                action.member
            ]

		case 'UPDATE_MEMBER':
			let indexOfMember = state.findIndex(member => member.id === action.member.id)
			const updateMemberArray = [...state]
			updateMemberArray[indexOfMember] = action.member
			return [
				...updateMemberArray,
				// isEditing: false,
				// isUpdated: true
            ]

		case "DELETE_MEMBER_SUCCESS":
            // const tempMembers = state.filter((member) => member.id !== action.member.id)
			return [
				...state.filter(member => member.id !== action.member.id)
            ]

        default:
            return state;
    }
}

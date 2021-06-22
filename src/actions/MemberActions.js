export const fetchMembers = () => {
    return (dispatch) => {
      	fetch("http://localhost:3000/members")
        .then(response =>  response.json())
        .then(members => {
          	dispatch({ type: 'FETCH_MEMBERS_SUCCESS', members })
      	})
    }
}

export function fetchMembersSuccess(members) {
    return {type: 'FETCH_MEMBERS_SUCCESS', members};
}
  
export const createMember = (member, history) => {
    return (dispatch) => {
        dispatch({type: "ADD_MEMBER"})
        fetch ("http://localhost:3000/members", {
            method: "POST",
            body: JSON.stringify(member),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(member => {
			dispatch(createMemberSuccess(member))
			history.push(`/members/${member.id}`)
		})
		return member
    }
}

export function createMemberSuccess(member) {
	return {type: 'CREATE_MEMBER_SUCCESS', member}
}
  
export const deleteMember = (member, history) => {
    return (dispatch) => {
      	return fetch(`http://localhost:3000/members/${member.id}`, {
        	method: 'DELETE'
      	})
      	.then(res => res.json())
  		.then(member => {
			dispatch(deleteMemberSuccess(member))
			history.push(`/members`)
		})
    }
}

export function deleteMemberSuccess(member) {
	return {type: 'DELETE_MEMBER_SUCCESS', member}
}
  
export const editMember = (member, history) => {
    return (dispatch) => {
      	dispatch({type: "EDIT_MEMBER"})
      	fetch(`http://localhost:3000/members/${member.id}`, {
        	headers: {
          		'Content-Type': 'application/json',
          		'Accept': 'application/json'
        	},
        	method: 'PATCH',
        	body: JSON.stringify({member: member})
      	})
        .then(response =>  response.json())
        .then(member => {
          	dispatch({ type: 'UPDATE_MEMBER', member })
      	})
    }
}

export const fetchTours = () => {
    return (dispatch) => {
      	fetch("http://localhost:3000/tours")
        .then(response =>  response.json())
        .then(tours => {
          	dispatch({ type: 'FETCH_TOURSS_SUCCESS', tours })
      	})
    }
}

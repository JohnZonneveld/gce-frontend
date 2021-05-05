export const fetchMembers = () => {
    return (dispatch) => {
      	fetch("http://localhost:3000/members")
        .then(response =>  response.json())
        .then(members => {
          	debugger
          	dispatch({ type: 'FETCH_MEMBERS_SUCCESS', members })
      	})
    }
}

export function fetchMembersSuccess(members) {
    return {type: 'FETCH_MEMBERS_SUCCESS', members};
}
  
export const addMember = member => {
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
        .then(member => dispatch({type: "MEMBER_ADDED", payload: member}))
    }
}
  
export const deleteMember = (memberId) => {
    return (dispatch) => {
      	return fetch(`http://localhost:3000/members/${memberId}`, {
        	method: 'DELETE'
      	})
      	.then(res => res.json())
      	.then( dispatch({type: 'DELETE_MEMBER', payload: memberId}))
    }
}
  
export const editMember = (member) => {
    debugger
    return (dispatch) => {
      	dispatch({type: "EDIT_MEMBER"})
      	debugger
      	fetch(`http://localhost:3000/members/${member.id}`, {
        	headers: {
          		'Content-Type': 'application/json',
          		// 'Accept': 'application/json'
        	},
        	method: 'PATCH',
        	body: JSON.stringify({member: member})
      	})
        .then(response =>  response.json())
        .then(member => {
          	dispatch({ type: 'UPDATE_MEMBER', member })
      	})
		// dispatch({ type: 'SHOW_MEMBER', member})
    }
}
  
export const fetchMember = (id) => {
    return (dispatch) => {
		dispatch({ type: 'LOADING_MEMBERS'})
		fetch(`http://localhost:3000/members/${id}`)
        .then(response =>  response.json())
        .then(responseJSON => {
			debugger
			dispatch({ type: 'SHOW_MEMBER', member: responseJSON })
      	})
    }
}

export const updateMember = (id) => {
	return (dispatch) => {
		debugger
	}
}

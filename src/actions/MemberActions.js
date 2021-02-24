export const fetchMembers = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_MEMBERS'})
      fetch("http://localhost:3000/members")
        .then(response =>  response.json())
        .then(responseJSON => {
          dispatch({ type: 'FETCH_MEMBERS', payload: responseJSON })
      })
    }
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
      .then(member => dispatch({type: 'DELETE_MEMBER', payload: member}))
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
        .then(response => {
          dispatch({ type: 'SHOW_MEMBER', response })
      })
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
  
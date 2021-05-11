export const fetchTours = () => {
    // debugger
    return (dispatch) => {
      	fetch("http://localhost:3000/tours")
        .then(response =>  response.json())
        .then(tours => {
          	dispatch({ type: 'FETCH_TOURS_SUCCESS', tours })
      	})
    }
}

export function fetchToursSuccess(tours) {
    debugger
    return {type: 'FETCH_TOURS_SUCCESS', tours};
}
  
export const createTour = (tour, history) => {
    debugger
    return (dispatch) => {
        dispatch({type: "ADD_TOUR"})
        fetch ("http://localhost:3000/tours", {
            method: "POST",
            body: JSON.stringify(tour),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(tour => {
			dispatch(createTourSuccess(tour))
			history.push(`/tours/${tour.id}`)
		})
		return tour
    }
}

export function createTourSuccess(tour) {
	debugger
	return {type: 'CREATE_TOUR_SUCCESS', tour}
}
  
export const deleteTour = (tour, history) => {
	debugger
    return (dispatch) => {
      	return fetch(`http://localhost:3000/tours/${tour.id}`, {
        	method: 'DELETE'
      	})
      	.then(res => res.json())
  		.then(tour => {
			dispatch(deleteTourSuccess(tour))
			history.push(`/tours`)
		})
    }
}

export function deleteTourSuccess(tour) {
	debugger
	return {type: 'DELETE_TOUR_SUCCESS', tour}
}
  
export const editTour = (tour, history) => {
    debugger
    return (dispatch) => {
      	dispatch({type: "EDIT_TOUR"})
      	debugger
      	fetch(`http://localhost:3000/tours/${tour.id}`, {
        	headers: {
          		'Content-Type': 'application/json',
          		'Accept': 'application/json'
        	},
        	method: 'PATCH',
        	body: JSON.stringify({tour: tour})
      	})
        .then(response =>  response.json())
        .then(tour => {
          	dispatch({ type: 'UPDATE_TOUR', tour })
      	})
    }
}
  
export const fetchTour = (id) => {
    debugger
    return (dispatch) => {
		dispatch({ type: 'LOADING_TOURS'})
		fetch(`http://localhost:3000/tours/${id}`)
        .then(response =>  response.json())
        .then(responseJSON => {
			debugger
			dispatch({ type: 'SHOW_TOUR', tour: responseJSON })
      	})
    }
}

export const updateTour = (id) => {
	return (dispatch) => {
		debugger
	}
}

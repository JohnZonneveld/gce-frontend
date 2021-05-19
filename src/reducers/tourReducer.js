export default function tourReducer(state = { tours: []}, action) {
    let idx;
    switch (action.type) {

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

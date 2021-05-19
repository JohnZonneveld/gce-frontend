export default function tourReducer(state = [], action) {
    let idx;
    switch (action.type) {

        case "FETCH_TOURS_SUCCESS":
            return [
                ...state,
                ...action.tours
            ]

        case "CREATE_TOUR_SUCCESS":
            let tempTours = state
                tempTours.push(action.tour)
                return [
                    ...state,
                    ...tempTours
                ]

        case "REMOVE_TOUR":
            idx = state.findIndex(tour => tour.id === action.id);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        case 'UPDATE_TOUR':
            let indexOfTour = state.findIndex(tour => tour.id === action.tour.id)
            const updateTourArray = [...state]
            updateTourArray[indexOfTour] = action.tour
            return [
                ...updateTourArray,
                // isEditing: false,
                // isUpdated: true
            ]

        case "DELETE_TOUR_SUCCESS":
            return [
                ...state.filter((tour) => tour.id !== action.tour.id)
            ]

        default:
        return state;
    }
}

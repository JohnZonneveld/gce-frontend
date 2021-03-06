import React from 'react'
import {Link} from 'react-router-dom';

const ToursList = ({tours}) => {

    return (
        <ul>
            {tours.map(
                tour =>
                    <li key={tour.id}>
                        <Link to ={'/tours/' + tour.id}>{tour.name}</Link>
                        {tour.country ? ', ' + tour.country : null}
                        , {tour.date.toDateString()}
                    </li>
            )}
        </ul>
    )
}

export default ToursList
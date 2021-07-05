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
                        ,&nbsp;
                        <span>
                            { (new Date(tour.date)).toLocaleDateString() }
                        </span>
                    </li>
            )}
        </ul>
    )
}

export default ToursList
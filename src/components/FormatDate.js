import React from 'react'

function FormatDate(date) {
    const formattedDate = date.slice(0,11)
    return (
        <div>
            {formattedDate}
        </div>
    )
}

export default FormatDate

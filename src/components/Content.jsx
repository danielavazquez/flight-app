import React from 'react';

const Content = ({dep_time, arr_time, origin, destination, price}) => {
    return (
        <div className="content">
          <ul>
            <li>From: {origin} To: {destination} Depature time: {dep_time} Arrival time: {arr_time} - Price € {price}</li>
          </ul>
        </div>
    )
}

export default Content
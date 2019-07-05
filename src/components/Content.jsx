import React from "react";

const Content = props => (
  <>
    {props.flights.map(({ cityFrom, cityTo, dTime, aTime, price }, index) => (
      <div className="content" key={index}>
        <ul>
          <li>
            From: {cityFrom} To: {cityTo} Depature time: {dTime} Arrival time:{" "}
            {aTime} - Price € {price}
          </li>
        </ul>
      </div>
    ))}
  </>
);
export default Content;

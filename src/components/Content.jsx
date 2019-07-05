import React from "react";
import { DateTime } from "luxon";

const Content = props => (
  <>
    <div className="title content">
      <div>From</div>
      <div>To</div>
      <div>Depature</div>
      <div>Arrival</div>
      <div>Price</div>
    </div>
    {props.flights
      .slice(0, 5)
      .map(({ cityFrom, cityTo, dTime, aTime, price }, index) => {
        const formatedDate = DateTime.fromMillis(dTime * 1000).toFormat(
          "hh:mm"
        );
        const formatedDateArrival = DateTime.fromMillis(aTime * 1000).toFormat(
          "hh:mm"
        );

        return (
          <div className="content" key={index}>
            <div className="from">{cityFrom}</div>
            <div className="to">{cityTo}</div>
            <div>{formatedDate}</div>
            <div>{formatedDateArrival}</div>
            <div className="price">€ {price}</div>
          </div>
        );
      })}
  </>
);
export default Content;

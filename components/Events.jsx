import React from "react";
const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event || "Test Event Name"}</h5>
            {props.location && <p className="location">{props.location}</p>}
        </td>

    )
}
export default Event;

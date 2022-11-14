import React from "react";

function NameListItems(props) {
    return (
        <React.Fragment>
            <li className="list-group-item shadow-sm">
                <div className="row align-items-center">
                    <div className="col-2 ">
                        <img src={props.avatar} className="rounded-circle border border-dark shadow-sm"></img>
                    </div>
                    <div className="col-10">
                        <h4>
                            Name: {props.name}
                        </h4>
                        <p>
                            Gender: {props.gender}
                        </p>
                        <p>
                            Location: {props.location} | E-Mail: {props.email}
                        </p>
                        <p>
                            {new Intl.DateTimeFormat('en-GB').format(new Date(props.dirthday))}
                        </p>
                    </div> </div>
            </li>
        </React.Fragment>
    );
}

export default NameListItems;
import React, { useState, useEffect } from "react";
import NameListItems from "./NameListItems";

function Namelist() {

    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([{
        "id": 1,
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
        },
        "location": {
            "city": "kilcoole",

        },
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/75.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
    },
    { "gender": "female", "id": 2, "name": { "title": "Ms", "first": "Malena", "last": "Edvartsen" }, "location": { "street": { "number": 7522, "name": "Karl Fossums vei" }, "city": "Gata", "state": "Sør-Trøndelag", "country": "Norway", "postcode": "9710", "coordinates": { "latitude": "48.0704", "longitude": "168.9651" }, "timezone": { "offset": "-5:00", "description": "Eastern Time (US & Canada), Bogota, Lima" } }, "email": "malena.edvartsen@example.com", "dob": { "date": "1948-02-23T19:30:30.028Z", "age": 74 }, "picture": { "large": "https://randomuser.me/api/portraits/women/83.jpg", "medium": "https://randomuser.me/api/portraits/med/women/83.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg" } },
    { "gender": "male", "id": 3, "name": { "title": "Mr", "first": "Timothy", "last": "Gardner" }, "location": { "street": { "number": 3545, "name": "The Grove" }, "city": "Edinburgh", "state": "Kent", "country": "United Kingdom", "postcode": "G9H 2HZ", "coordinates": { "latitude": "5.3615", "longitude": "-179.4733" }, "timezone": { "offset": "+10:00", "description": "Eastern Australia, Guam, Vladivostok" } }, "email": "timothy.gardner@example.com", "dob": { "date": "1960-11-03T12:11:43.833Z", "age": 62 }, "picture": { "large": "https://randomuser.me/api/portraits/men/29.jpg", "medium": "https://randomuser.me/api/portraits/med/men/29.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg" } }
    ]);

    //const nameList = 

    const nameListComponent = () => {
        return (nameList.map((aName) => {
            return (
                <NameListItems
                    key={aName.id}
                    name={`${aName.name.first} ${aName.name.last}`}
                    gender={aName.gender}
                    location={aName.location.city}
                    email={aName.email}
                    dirthday={aName.dob.date}
                    avatar={aName.picture.medium} />);
        }));

    };

    useEffect(() => {
        fetch("https://randomuser.me/api")
        .then(response => {
            return response.json();
        }).then(responseJson => {
            setNameList((Namelist) => [...Namelist, responseJson.results[0]]);
        });

    }, [loadData]);

    const addUserHandler = () => {
        /*
         const newUser = { "id": "4", "gender": "female", "name": { "title": "Miss", "first": "Judith", "last": "Clark" }, "location": { "street": { "number": 4007, "name": "Mill Road" }, "city": "Kildare", "state": "Cork", "country": "Ireland", "postcode": 77479, "coordinates": { "latitude": "20.8372", "longitude": "16.5644" }, "timezone": { "offset": "+9:00", "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" } }, "email": "judith.clark@example.com", "dob": { "date": "1988-02-14T15:47:57.129Z", "age": 34 }, "picture": { "large": "https://randomuser.me/api/portraits/women/86.jpg", "medium": "https://randomuser.me/api/portraits/med/women/86.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg" } };
         console.log("User Added");
         //concat
         //  setNameList((nameList) => nameList.concat(newUser));
         //spread operator
         setNameList((nameList) => [...nameList, newUser]);
         */
        setLoadData(new Date());
    }
    return (
        <React.Fragment>
        
            <hr />
            <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
            <div className="container mt-4">
                <ul className="list-group">
                    {nameListComponent()}
                </ul>
            </div>

        </React.Fragment>
    );
}

export default Namelist;
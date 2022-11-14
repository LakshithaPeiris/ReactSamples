import React from "react";

function Home() {
    return (
        <div className="container mt-4">
            <h3>Home</h3>
            <p>
                A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
            </p>
        </div>
    );

}

export default Home;
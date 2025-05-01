import React from "react";

function DataDisplay({ data }) {
    return <div><h1>{data.name}</h1><p>{data.description}</p></div>
}

export default DataDisplay
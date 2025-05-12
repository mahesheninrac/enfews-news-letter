import React from "react";

function DataDisplay({ data }) {
    return <div><h3>{data.name}</h3><p>{data.description}</p></div>
}

export default DataDisplay
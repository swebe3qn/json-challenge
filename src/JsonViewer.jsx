import React, { useState } from "react";
import JsonTree from "./JsonTree";

const JsonViewer = ({json}) => {
    const [path, setPath] = useState('')

    return (
        <>
            <h1>JSON Viewer</h1>

            <JsonTree 
                json={json} 
                updatePath={setPath} 
            />
            
            <p>Path: {path || <i>undefined (click on key)</i>}</p>
        </>
    );
};

export default JsonViewer;

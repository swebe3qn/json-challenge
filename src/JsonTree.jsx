import React from "react"

const JsonTree = ({json, updatePath}) => {
    const displayValue = val => {
        return (
            <span>
                {typeof val === 'string' && '"'}
                {val.toString()}
                {typeof val === 'string' && '"'}
            </span>
        )
    }

    const display = (obj, path = '') => {
        return (
            <div>
                {Object.keys(obj).map((key, i) => (
                    <div className="indent" key={`obj-${path}-${key}-${i}`}>
                        {Array.isArray(obj[key]) 
                            ? (
                                <div>
                                    {key}:
                                    {' ['}
                                    {obj[key].map((el, i) => (
                                        <div className="indent" key={`arr-${path}-${key}-${i}`}>
                                            {'{'}
                                            {display(el, `${path}${path && '.'}${key}[${i}]`)}
                                            {'}'}
                                            {i < obj[key].length - 1 && ','}
                                        </div>
                                    ))}
                                    {']'}
                                </div>
                            )
                            : typeof obj[key] === 'object' ? (
                                <div>
                                    {key}:
                                    {' {'}
                                    {display(obj[key], `${path}${path && '.'}${key}`)}
                                    {'}'}
                                    {i < Object.keys(obj).length - 1 && ','}
                                </div>
                            )
                            : (
                                <div>
                                    <span className="key" onClick={() => updatePath(`${path}${path && '.'}${key}`)}>{key}</span>: {displayValue(obj[key])}
                                    {i < Object.keys(obj).length - 1 && ','}
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="json-tree">
            {'{'}
            {display(json)}
            {'}'}
        </div>
    )
}

export default JsonTree
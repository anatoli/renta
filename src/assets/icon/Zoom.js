import React from 'react';

const Zoom = (props) => {
    const width = props.width || 24;
    const height = props.height || 24;
    return (
        <svg className="svg-icon zoom-icon" role="img" xmlns="http://www.w3.org/2000/svg" width={width}
                 height={height}
                viewBox="0 0 24 24">
            <path d="M24 9h-2v-7h-7v-2h9v9zm-9 15v-2h7v-7h2v9h-9zm-15-9h2v7h7v2h-9v-9zm9-15v2h-7v7h-2v-9h9z"/>
        </svg>
    )};
export default Zoom;

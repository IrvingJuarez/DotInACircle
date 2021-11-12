import React from 'react';

// styles
import "../styles/Plane.scss";

const Plane = () => (
    <React.Fragment>
        <article className="plane-container">
            <canvas className="plane-container_canvas1"></canvas>

            <canvas className="plane-container_canvas2"></canvas>

            <canvas className="plane-container_canvas3"></canvas>
        </article>
    </React.Fragment>
)

export default Plane;
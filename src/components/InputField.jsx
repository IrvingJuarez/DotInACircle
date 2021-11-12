import React from 'react';

// styles
import "../styles/InputField.scss";

const InputField = () => (
    <React.Fragment>
        <article className="inputField-container">
            <div className="inputField-container_header">
                <div>
                    <label htmlFor="radius">Radius: </label>
                    <input type="number" id="radius" placeholder="E.g: 5" />
                </div>

                <button>
                    Run
                </button>
            </div>

            <div className="inputField-container_center-field">
                <h2>Center:</h2>

                <div className="coordinate-input">
                    <label htmlFor="center-x">X:</label>
                    <input type="number" id="center-x" defaultValue="0" />
                </div>

                <div className="coordinate-input">
                    <label htmlFor="center-y">Y:</label>
                    <input type="number" id="center-y" defaultValue="0" />
                </div>
            </div>

            <div className="inputField-container_point-field">
                <h2>Point:</h2>

                <div className="coordinate-input">
                    <label htmlFor="point-x">X:</label>
                    <input type="number" id="point-x" />
                </div>

                <div className="coordinate-input">
                    <label htmlFor="point-y">Y:</label>
                    <input type="number" id="point-y" />
                </div>
            </div>

            <div className="inputField-container_result">
                <span></span>
            </div>
        </article>
    </React.Fragment>
)

export default InputField;
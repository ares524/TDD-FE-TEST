import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

const Keypad = ({ argument, setArguments, handleSubmit }) => {
    return (
        <div className="keypad-container">
            <input
                className="argument-input"
                autoFocus
                onChange={(e) => setArguments(e.target.value)}
                value={argument}
                placeholder="1,3,5"
            />
            <button className="submit-button" onClick={handleSubmit}>
                submit
            </button>
        </div>
    );
};

Keypad.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setArguments: PropTypes.func.isRequired,
};

export default Keypad;

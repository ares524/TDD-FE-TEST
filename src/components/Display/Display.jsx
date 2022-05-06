import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ sum, average, deviation }) => (
    <div className="display-container">
        <p className="display-value">sum: {sum}</p>
        <p className="display-value">average: {average}</p>
        <p className="display-value">deviation: {deviation}</p>
    </div>
);

Display.propTypes = {
    sum: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    deviation: PropTypes.string.isRequired,
};

Display.defaultProps = { sum: '0', average: '0', deviation: '0' };

export default Display;

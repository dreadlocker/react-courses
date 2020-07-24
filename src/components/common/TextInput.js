import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    let wrapperClass = 'form-group'
    if (props.error.length) wrapperClass += ' has-error'

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    onChange={props.onChange}
                    value={props.value}
                    id={props.id}
                    name={props.name}
                    type='text'
                    className="form-control"
                />
            </div>
            {props.error && (
                <div className="alert alert-danger">{props.error}</div>
            )}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
}
TextInput.defaultProps = {
    error: ''
}

export default TextInput;

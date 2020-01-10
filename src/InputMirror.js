import React from 'react';
import {connect} from 'react-redux';

const InputMirror = ({inputValue, inputChange}) => {
    return (
        <div>
            <h2>InputMirror</h2>
            <input value={inputValue} onChange={inputChange}/>
            <p>{inputValue}</p>
        </div>
    )
};

const mapStateToProps = ({inputValue}) => ({
    inputValue
});

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (event) => {
            const action = {
                type: 'INPUT_CHANGE',
                text: event.target.value
            };
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);
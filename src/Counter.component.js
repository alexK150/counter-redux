import React from 'react';
import {connect} from 'react-redux';

const Counter = ({count, increment})=>{
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            const action = {
                type: 'INCREMENT',
            };
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
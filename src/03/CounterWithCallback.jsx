import React from 'react';
import PropTypes from 'prop-types';

class CounterWithCallback extends React.Component {
    render() {
        return (
            <div>
                <span> 카운트 : {this.props.count}</span>
                <button onClick={() => this.props.onAdd()}>카운트 증가 </button>

            </div>
        );

    }




}

export default CounterWithCallback;
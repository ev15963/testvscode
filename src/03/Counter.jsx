import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    //state 정의
    this.state = {
      count: 0,
    };
    //이후 콜백 함수를 다룰 때 bind(this)에 대하여
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트증가</button>
      </div>
    );
  }
}

export default Counter;

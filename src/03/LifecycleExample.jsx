import React from 'react';
import { Redirect } from 'react-router-dom';

class LifecycleExample extends React.Component {
  static getDeirvedStateFromProps() {
    console.log('getDeriedStateFromProps 호출');
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }
  componentDidMount() {
    console.log('componentDidMount 호출');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }
  componentWillUnmount() {
    console.log('getSnapshotBeforeUpdate 호출');
  }
  getSnapshotBeforeUpdate() {
    console.log('shouldComponentUpdate 호출');
    return true;
  }
  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifecycleExample;

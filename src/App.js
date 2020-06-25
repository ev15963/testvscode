import React from 'react';
//작성한 컴포넌트 소환
// import TodaysPlan from './03/TodaysPlan';
// import PropsComponent from './03/PropsCompnent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
// import ChildProperty from './03/ChildProperty';
// import StateExample from './03/StateExample';
// import ForceUpdataExample from './03/ForceUpdataExample';
// import Counter from './03/Counter';
import LifecycleExample from './03/LifecycleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return <div>{this.state.hasDestroyed ? null : <LifecycleExample />}</div>;
  }
}
export default App;

//JSX안에 마크업형식으로 추가

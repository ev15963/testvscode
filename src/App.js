import React, { Component } from 'react';
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
// import LifecycleExample from './03/LifecycleExample';
// import Counter from './03/Counter';
// import NewCounter from './03/NewCounter';
// import Counter from './03/Counter2';
// import '.materia/ize.css';
import './sass/materialize.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머티리얼 CSS</h1>
      </div>
    );
  }
}
export default App;

//JSX안에 마크업형식으로 추가

import React from 'react';
//작성한 컴포넌트 소환
// import TodaysPlan from './03/TodaysPlan';
// import PropsComponent from './03/PropsCompnent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div>
            <span>자식노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}
export default App;

//JSX안에 마크업형식으로 추가

import React from 'react';
//작성한 컴포넌트 소환
// import TodaysPlan from './03/TodaysPlan';
// import PropsComponent from './03/PropsCompnent';
// import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
// import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b>지루할 때 : </b> {/*이름만 전달하기*/}
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 : </b> {/** 이름 전달하지 않을때 */}
          <BooleanComponent />
        </div>
      </div>
    );
  }
}
export default App;

//JSX안에 마크업형식으로 추가

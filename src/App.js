import React from 'react';
//작성한 컴포넌트 소환
// import TodaysPlan from './03/TodaysPlan';
// import PropsComponent from './03/PropsCompnent';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    // const array = [1,2,3];
    // const obj = {name: '제목', age: 30};
    // const node = <h1>노드</h1>;
    // const func = () =>
    return (
      <ChildComponent
        boolValue={true} // 불리언 값 전달
        numValue={1} //숫자를 전달
        arrayValue={[1, 2, 3]} //배열 전달
        objValue={{ name: '제목', age: 30 }} // 객체 전달
        nodeValue={<h1>노드</h1>} //노드 전달
        funcValue={() => {
          //함수 객체를 전달
          console.log('메시지');
        }}
      />
    );
  }
}
export default App;

//JSX안에 마크업형식으로 추가

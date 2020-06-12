import React from 'react';
//작성한 컴포넌트 소환
import TodaysPlan from './03/TodaysPlan';

class App extends React.Component {
  render() {
    return (
      //아래는 JSX양식
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div>안녕하세요</div>
        <TodaysPlan />
      </div>
    );
  }
}
export default App;

//JSX안에 마크업형식으로 추가

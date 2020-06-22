import React from 'react';

class LifecycleExample extends React.Component {
  static getDeirvedStateFromProps() {
    console.log('getDeriedStateFromProps 호출');
  }

  constructor() {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }

  ///////////
  render() {
    return (
      //아래는 JSX양식
      <div>
        <img src="https://www.easyspub.co.kr/images/logo_footer.png" />
        <div>안녕하세요</div>
      </div>
    );
  }
}
export default LifecycleExample;

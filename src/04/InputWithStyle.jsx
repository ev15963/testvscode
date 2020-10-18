import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  //
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      // 클래스형 컴포넌트의 PureComponent 형태로 작성
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      // autoFocus값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className="validate"
          ref={this.setRef}
          onChange={this.handleChange} /**label 안에 전달받은 label겂을 출력 */
          value={value}
          type={type}
        />
        <label htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && <span className="helper-text">{errorMessage}</span>}
        {/**프로퍼티로 전달받은 콜백 함수를 DOM 이벤트 프로퍼티에 연결하여 input에 마우스 커서가 포커스될 때 상위 컴포넌트의 콜백 함수를 호출*/}
        </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']), // 문자열형의 값 'text', 'number', 'price' 중 하나의 값만 가질 수 있음
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text', // type의 기본값은 'text'입니다.
};

export default Input;

import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

storiesOf('Input', module).add('기본설정', () => <Input />);
// .add('label 예제', () => <Input name="name" label="이름" />)
// .add('onChange 예제', () => <Input name="name" onChange={action('onchange 이벤트 발생')} />);

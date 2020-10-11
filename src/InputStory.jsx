import React from 'react';
import { stroiesOf } from '@storybook.react';

import Input from '../03/Input';
import { action } from '@storybook/addon-actions';

stroiesOf('Input, module')
  .add('기본 설정', () => <Input />)
  .addWithJSX('기본설정', () => <Input name="123"></Input>)
  .addWithJSX('label 예제', () => <Input name="123" label="이름"></Input>)
  .addWithJSX('onChange 에제', () => (
    <Input name="123" label="이름" onChange={action('onChange Event Occurs')}></Input>
  ));

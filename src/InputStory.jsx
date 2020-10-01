import React from 'react';
import { stroiesOf } from '@storybook.react';

import Input from '../03/Input';

stroiesOf('Input, module').add('기본 설정', () => <Input />);

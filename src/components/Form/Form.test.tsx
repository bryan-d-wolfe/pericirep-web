import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import truthyTest from '../../Tests/truthyTest';

it (
  'Form is truthy!',
  () => truthyTest(<Form />)
);

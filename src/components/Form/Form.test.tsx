import React from 'react';
import { Form } from './Form';
import truthyTest from '../../tests/truthyTest';

it (
  'Form is truthy!',
  () => truthyTest(<Form />)
);

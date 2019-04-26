import React from 'react';
import Main from './Main';
import truthyTest from '../../tests/truthyTest';

it (
  'Main is truthy!',
  () => truthyTest(<Main title={'Test'} />)
);

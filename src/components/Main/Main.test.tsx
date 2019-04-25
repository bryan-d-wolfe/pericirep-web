import React from 'react';
import Main from './Main';
import truthyTest from '../../Tests/truthyTest';
import logo from '../logo.svg';

it (
  'Main is truthy!',
  () => truthyTest(<Main title={'Test'} imgSrc={logo} />)
);

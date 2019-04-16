import React from 'react';
import Main from './Main';
import truthyTest from '../Tests/truthyTest';
import logo from '../logo.svg';

it (
  'Main works!',
  () => truthyTest(<Main imgSrc={logo} />)
);

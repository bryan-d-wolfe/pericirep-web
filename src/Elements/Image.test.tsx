import React from 'react';
import Image from './Image';
import logo from '../logo.svg';
import truthyTest from '../Tests/truthyTest';

it (
  'Image works!',
  () => truthyTest(<Image src={logo} />)
);

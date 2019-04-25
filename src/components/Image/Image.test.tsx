import React from 'react';
import Image from './Image';
import logo from '../logo.svg';
import truthyTest from '../../Tests/truthyTest';

it (
  'Image is truthy!',
  () => truthyTest(<Image src={logo} />)
);

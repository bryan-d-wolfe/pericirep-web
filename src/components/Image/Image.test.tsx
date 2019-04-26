import React from 'react';
import { Image } from './Image';
import test from './test.svg';
import truthyTest from '../../tests/truthyTest';

it (
  'Image is truthy!',
  () => truthyTest(<Image src={test} />)
);

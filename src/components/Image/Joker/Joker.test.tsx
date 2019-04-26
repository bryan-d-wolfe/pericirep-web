import React from 'react';
import { Image } from '../Image';
import joker from './joker.svg';
import truthyTest from '../../../tests/truthyTest';

it (
  'Image is truthy!',
  () => truthyTest(<Image src={joker} />)
);

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import containerTest from '../Tests/containerTest';


it (
  'Header works!',
  () => {
    const title = 'Title Test';
    const header: JSX.Element = <Header title={title} />;
    const h1: JSX.Element = <h1>{title}</h1>;
    containerTest(header, h1);
  }
);

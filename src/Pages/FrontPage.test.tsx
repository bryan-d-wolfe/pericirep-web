import React from 'react';
import FrontPage from './FrontPage';
import snapshotTest from '../Tests/snapshotTest';

test(
  'FrontPage renders correctly', 
  () => snapshotTest(<FrontPage />)
);

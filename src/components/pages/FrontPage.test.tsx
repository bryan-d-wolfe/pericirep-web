import React from 'react';
import FrontPage from './FrontPage';
import snapshotTest from '../../tests/snapshotTest';

test(
  'FrontPage renders correctly',
  () => snapshotTest(<FrontPage />)
);

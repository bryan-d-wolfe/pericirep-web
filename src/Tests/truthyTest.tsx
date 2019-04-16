import { shallow } from 'enzyme';

function truthyTest(main: JSX.Element) {
  const wrapper = shallow(main);
  expect(wrapper).toBeTruthy();
}

export default truthyTest;

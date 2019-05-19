import { shallow } from "enzyme";

function containerTest(container: JSX.Element, element: JSX.Element) {
  const wrapper = shallow(container);
  expect(wrapper).toContainReact(element);
}

export default containerTest;

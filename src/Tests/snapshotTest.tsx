import renderer from "react-test-renderer";

function snapshotTest(element: JSX.Element) {
  const tree = renderer.create(element).toJSON();
  expect(tree).toMatchSnapshot();
}

export default snapshotTest;

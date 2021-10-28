import React from 'react';
import renderer from 'react-test-renderer';
import Userinfo from '../src/pages/userinfo';

test('test Userinfo page', () => {
  const component = renderer.create(
    <Userinfo />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

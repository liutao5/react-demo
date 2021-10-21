import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './index';

test('test Dashboard page', () => {
  const component = renderer.create(
    <Dashboard />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../src/pages/dashboard';

test('test Dashboard page', () => {
  const component = renderer.create(
    <Dashboard />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

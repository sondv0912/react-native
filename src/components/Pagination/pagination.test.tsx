import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '.';
test('Link renders correctly', () => {
  const tree = renderer
    .create(<Pagination page={1} totalPages={10} onPageChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

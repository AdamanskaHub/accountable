import React from 'react';
import { shallow } from 'enzyme';
import Boss from './Boss';

describe('<Boss />', () => {
  test('renders', () => {
    const wrapper = shallow(<Boss />);
    expect(wrapper).toMatchSnapshot();
  });
});

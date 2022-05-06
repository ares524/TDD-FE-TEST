import React from 'react';
import { mount, shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display
          sum={wrapper.instance().state.sum}
          average={wrapper.instance().state.average}
          deviation={wrapper.instance().state.deviation}
        />,
        <Keypad
          argument={wrapper.instance().state.argument}
          handleSubmit={wrapper.instance().submit}
          setArguments={wrapper.instance().setArguments}
        />,
      ])
    ).toEqual(true);
  });

  describe('submit', () => {
    it('submit argument', () => {
      wrapper.instance().submit('5');
    });
  });

  describe('setArguments', () => {
    it('updates the state of argument', () => {
      wrapper.instance().setArguments('1,3,5');
      expect(wrapper.state('argument')).toEqual('1,3,5');
    });
  });
});

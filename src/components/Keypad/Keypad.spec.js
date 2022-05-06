import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

const MOCK_SET_ARGUMENTS = jest.fn();
const MOCK_HANDLE_SUBMIT = jest.fn();
const MOCK_ARGUMENT = '1,3,5';

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        argument={MOCK_ARGUMENT}
        setArguments={MOCK_SET_ARGUMENTS}
        handleSubmit={MOCK_HANDLE_SUBMIT}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 <input />', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render 1 <button />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});

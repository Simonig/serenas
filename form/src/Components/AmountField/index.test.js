import React from 'react';
import { shallow } from 'enzyme';
import AmountField from './index';

describe('AmountField Render', () => {
  it('should render with defaults', () => {
    const tree = shallow(<AmountField name="test" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render an input with right attributes', () => {
    const tree = shallow(<AmountField name="test" label="testLabel" value={1100} />);
    const inputs = tree.find('input');

    const input = inputs.first();

    expect(inputs.length).toEqual(1);
    expect(input.prop('name')).toEqual('test');
    expect(input.prop('placeholder')).toEqual('testLabel');
    expect(input.prop('value')).toEqual(1100);
  });
});

describe('AmountField Functionality', () => {
  it('should step the number on blur', () => {
    const onChange = jest.fn();
    const tree = shallow(<AmountField name="test" value={1001} onChange={onChange} />);
    const input = tree.find('input').first();

    input.simulate('blur', {
      target: {
        value: input.prop('value'),
        name: input.prop('name'),
      },
    });

    expect(onChange).toHaveBeenCalledWith({
      name: 'test',
      value: 1100,
    });
  });

  it('should limit the max number on blur', () => {
    const onChange = jest.fn();
    const tree = shallow(<AmountField name="test" value={99999} onChange={onChange} />);
    const input = tree.find('input').first();

    input.simulate('blur', {
      target: {
        value: input.prop('value'),
        name: input.prop('name'),
      },
    });

    expect(onChange).toHaveBeenCalledWith({
      name: 'test',
      value: 25000,
    });
  });

  it('should limit the min number on blur', () => {
    const onChange = jest.fn();
    const tree = shallow(<AmountField name="test" value={-99999} onChange={onChange} />);
    const input = tree.find('input').first();

    input.simulate('blur', {
      target: {
        value: input.prop('value'),
        name: input.prop('name'),
      },
    });

    expect(onChange).toHaveBeenCalledWith({
      name: 'test',
      value: 1000,
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import BankData from './index';

describe('BankData Render', () => {
  it('should render with default data', () => {
    const tree = shallow(<BankData />);

    expect(tree).toMatchSnapshot();
  });

  it('should has and input for bic and iban', () => {
    const tree = shallow(<BankData />);

    const ibans = tree.find('InputField[name="iban"]');
    const bics = tree.find('InputField[name="bic"]');

    expect(ibans.length).toEqual(1);
    expect(bics.length).toEqual(1);
  });
});

describe('BankData Functionality', () => {
  it('should set the state based on props', () => {
    const bankData = {
      bic: '123123',
      iban: '0987654321',
    };

    const tree = shallow(<BankData bankData={bankData} />);
    const state = tree.state();

    expect(state).toEqual(bankData);
  });

  it('should change the state and execute onChange', () => {
    const onChange = jest.fn();

    const tree = shallow(<BankData onChange={onChange} />);
    const iban = tree.find('InputField[name="iban"]').first();

    iban.simulate('change', {
      name: 'iban',
      value: '999',
    });

    const state = tree.state();

    expect(state.iban).toEqual('999');
  });
});

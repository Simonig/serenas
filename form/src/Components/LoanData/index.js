import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  COLLECTION_DAY_OPTIONS,
  DURATION_OPTIONS,
  YES_NO_OPTIONS,
} from '../../constants';
import AmountField from '../../Components/AmountField';
import Select from '../../Components/Select';

class ContactData extends Component {
  constructor(props) {
    super(props);

    const {
      loanAsked, duration, collectionDay, rsv,
      isAcceptedTermsOfService, isAcceptedSolvencyRetrieval,
    } = this.props.loanData;

    this.state = {
      loanAsked: loanAsked || 0,
      duration: duration || '',
      collectionDay: collectionDay || '',
      rsv: rsv || '',
      isAcceptedTermsOfService: isAcceptedTermsOfService || '',
      isAcceptedSolvencyRetrieval: isAcceptedSolvencyRetrieval || '',
    };
  }

  onChange = (e) => {
    const { name, value } = e;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    const {
      loanAsked, duration, collectionDay, rsv,
      isAcceptedTermsOfService, isAcceptedSolvencyRetrieval,
    } = this.state;

    return (
      <Fragment>
        <h1>Loan Data</h1>
        <AmountField
          onChange={this.onChange}
          name="loanAsked"
          value={loanAsked}
          label="Loan"
        />
        <Select
          name="duration"
          label="Duration"
          onChange={this.onChange}
          options={DURATION_OPTIONS}
          value={duration}
        />
        <Select
          name="collectionDay"
          label="Collection Day"
          onChange={this.onChange}
          options={COLLECTION_DAY_OPTIONS}
          value={collectionDay}
        />
        <Select
          name="rsv"
          label="Rsv"
          onChange={this.onChange}
          options={YES_NO_OPTIONS}
          value={rsv}
        />


        <div className="form-group form-check">
          <input
            className="form-check-input"
            onClick={(e) => this.onChange({
              name: e.target.name,
              value: !isAcceptedTermsOfService,
            })}
            name="isAcceptedTermsOfService"
            defaultChecked={isAcceptedTermsOfService}
            value={isAcceptedTermsOfService}
            type="checkbox"
          />
          <label className="form-check-label">Terms and Conditions</label>
        </div>

        <div className="form-group form-check">
          <input
            className="form-check-input"
            onClick={(e) => this.onChange({
              name: e.target.name,
              value: !isAcceptedSolvencyRetrieval,
            })}
            name="isAcceptedSolvencyRetrieval"
            defaultChecked={isAcceptedSolvencyRetrieval}
            value={isAcceptedSolvencyRetrieval}
            type="checkbox"
          />
          <label className="form-check-label">Accept solvency retrieval</label>

        </div>
      </Fragment>
    );
  }
}

ContactData.defaultProps = {
  onChange: () => {
  },
  loanData: {
    loanAsked: 0,
    duration: '',
    collectionDay: '',
    rsv: '',
    isAcceptedTermsOfService: '',
    isAcceptedSolvencyRetrieval: '',
  },
};

ContactData.propTypes = {
  onChange: PropTypes.func,
  loanData: PropTypes.object,
};

export default ContactData;

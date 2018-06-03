import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  COLLECTION_DAY_OPTIONS,
  DURATION_OPTIONS,
} from '../../constants';
import AmountField from '../../Components/AmountField';
import Select from '../../Components/Select';
import Validation from './validation';

class ContactData extends Component {
  constructor(props) {
    super(props);

    const {
      loanAsked, duration, collectionDay,
    } = this.props.loanData;

    this.state = {
      loanAsked: loanAsked || 1000,
      duration: duration || '',
      collectionDay: collectionDay || '',
      errors: {},
    };
  }

  onChange = (e) => {
    const { name } = e;
    let { value } = e;

    if (typeof e.placeholder === 'string') {
      value = parseInt(value, 10);
    }

    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state);
    });
  };

  onBlur = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;

    console.log(name, value);

    errors[name] = Validation(name, value);

    console.log(errors);
    this.setState({ errors });
  };

  render() {
    const {
      loanAsked, duration, collectionDay, errors,
    } = this.state;

    return (
      <Fragment>
        <h1>Loan Data</h1>
        <div className="formContent">

          <AmountField
            onChange={this.onChange}
            onBlur={this.onBlur}
            name="loanAsked"
            value={loanAsked}
            label="Loan"
          />
          <p className="error">{errors.loanAsked}</p>

          <Select
            name="duration"
            label="Duration"
            onChange={this.onChange}
            onBlur={this.onBlur}
            options={DURATION_OPTIONS}
            value={duration}
          />
          <p className="error">{errors.duration}</p>

          <Select
            name="collectionDay"
            label="Collection Day"
            onChange={this.onChange}
            onBlur={this.onBlur}
            options={COLLECTION_DAY_OPTIONS}
            value={collectionDay}
          />
          <p className="error">{errors.collectionDay}</p>


          <p className="error">{errors.isAcceptedSolvencyRetrieval}</p>

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

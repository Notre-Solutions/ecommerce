import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  userName: '',
  emailAddress: '',
  photoUrl: '',
  error: null,
};

class UpdateDetialsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { emailAddress } = this.state;

    this.props.firebase
      .doPasswordReset(emailAddress)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { emailAddress, error } = this.state;

    const isInvalid = emailAddress === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={emailAddress}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <button disabled={isInvalid} type='submit'>
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(UpdateDetialsForm);

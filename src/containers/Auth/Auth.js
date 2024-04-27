import React, { Component } from 'react';
import is from 'is_js';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { firebaseAuth } from '../../axios/firebase';

import './Auth.css';

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        touched: false,
        valid: false,
        value: '',
        validation: {
          required: true,
          email: true,
        },
        type: 'email',
        label: 'Email',
        errorMessage: 'Please enter valid email',
      },
      password: {
        touched: false,
        valid: false,
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Please enter valid password 6 characters at least',
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    let isValid = true;

    if (!validation) {
      return true;
    }

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  handleInputChange = (event, controlName) => {
    const updatedFormControls = { ...this.state.formControls };
    const updatedControl = {
      ...updatedFormControls[controlName],
    };
    updatedControl.value = event.target.value;
    updatedControl.valid = this.validateControl(updatedControl.value, updatedControl.validation);
    updatedControl.touched = true;

    updatedFormControls[controlName] = updatedControl;

    let isFormValid = true;
    for (let control in updatedFormControls) {
      isFormValid = updatedFormControls[control].valid && isFormValid;
    }

    this.setState({
      formControls: updatedFormControls,
      isFormValid,
    });
  };

  handleLogin = async () => {
    await setPersistence(firebaseAuth, browserLocalPersistence);

    await signInWithEmailAndPassword(
      firebaseAuth,
      this.state.formControls.email.value,
      this.state.formControls.password.value,
    );
  };

  handleRegister = async () => {
    await setPersistence(firebaseAuth, browserLocalPersistence);

    await createUserWithEmailAndPassword(
      firebaseAuth,
      this.state.formControls.email.value,
      this.state.formControls.password.value,
    );
  };

  render() {
    const form = Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.handleInputChange(event, controlName)}
        />
      );
    });

    return (
      <div className={'Auth'}>
        <div>
          <h1>Authorization</h1>

          <form className={'AuthForm'} onSubmit={this.handleSubmit}>
            {form}

            <Button type={'success'} disabled={!this.state.isFormValid} onClick={this.handleLogin}>
              Login
            </Button>
            <Button
              type={'primary'}
              disabled={!this.state.isFormValid}
              onClick={this.handleRegister}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import UpdateDetailsForm from './components/AddDetials';
import { CartContext, CartProvider, Cart } from './components/cart';
import {
  FirebaseContext,
  withFirebase,
  getFirebase,
} from './components/Firebase';
import LoginManagment from './components/LoginManagement';
import PasswordChange from './components/PasswordChange';
import PasswordForget from './components/PasswordForget';
import {
  AuthUserContext,
  withAuthentication,
  withAuthorization,
  withEmailVerification,
} from './components/Session';
import ShoppingBag from './components/ShoppingBag';
import {
  SignInGoogle,
  SignInFacebook,
  SignInTwitter,
  SignInForm,
} from './components/SignIn';
import SignOut from './components/SignOut';
import { SignUpLink, withFBSignUp } from './components/SignUp';
import { Checkout } from './components/Stripe';
import UserData from './components/UserData';
import { UserList } from './components/Users';

class Index extends Component {
  render() {
    return (
      <div>
        <p>TEMP EXPORT FILE</p>
      </div>
    );
  }
}

export {
  Index,
  UpdateDetailsForm,
  CartContext,
  CartProvider,
  Cart,
  FirebaseContext,
  withFirebase,
  getFirebase,
  LoginManagment,
  PasswordChange,
  PasswordForget,
  AuthUserContext,
  withAuthentication,
  withAuthorization,
  withEmailVerification,
  ShoppingBag,
  SignInGoogle,
  SignInFacebook,
  SignInTwitter,
  SignInForm,
  SignOut,
  SignUpLink,
  withFBSignUp,
  Checkout,
  UserData,
  UserList,
};

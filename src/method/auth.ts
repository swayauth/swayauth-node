import axios from 'axios';
import { ChangeForgotPassword, ConstructorProp, DecodeTokenAndReferenceData, DecodeTokenReferenceResponse, ForgotPasswordResponse, LoginData, ManualLoginError, ManualLoginSuccess, RegisterData, RegisterSuccess, VerifyResponse, VerifySignUpData } from "../types";
import URLS from "../utils/URLS";

export const auth = ({ ApplicationKey, OrganizationSecret, type }: Pick<ConstructorProp, 'ApplicationKey' | 'OrganizationSecret'> & { type: 'user' | 'client' }) => Object.freeze({

  login: async function ({ email, password }: LoginData) {
    if (type == 'client' && !ApplicationKey) throw new Error('Application key is required');
    if (type == 'user' && !OrganizationSecret) throw new Error('Organization Secret is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/login/' + type,
      { email, password },
      {
        headers: {
          'Application-Key': ApplicationKey,
          'Organization-Secret': OrganizationSecret,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as ManualLoginError | ManualLoginSuccess
  },

  signUp: async function (prop: RegisterData) {
    if (!OrganizationSecret) throw new Error('Organization Secret is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/user',
      prop,
      {
        headers: {
          'Organization-Secret': OrganizationSecret,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as RegisterSuccess
  },

  verifySignUp: async function (prop: VerifySignUpData) {
    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/verify',
      prop,
      {
        headers: {
          'Organization-Secret': OrganizationSecret,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as VerifyResponse
  },

  forgotPassword: async function (prop: { email: string }) {
    if (!OrganizationSecret) throw new Error('Organization Secret is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/forgot-password/user',
      prop,
      {
        headers: {
          'Organization-Secret': OrganizationSecret,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as ForgotPasswordResponse
  },

  changeForgotPassword: async function (prop: ChangeForgotPassword) {
    if (!OrganizationSecret) throw new Error('Organization Secret is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/forgot-password/new-password',
      prop,
      {
        headers: {
          'Organization-Secret': OrganizationSecret,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as VerifyResponse
  },

  decodeTokenAndReference: async function (params: DecodeTokenAndReferenceData) {
    if (!OrganizationSecret) throw new Error('Organization Secret is required');

    const response = await axios.get(
      URLS.BASE_URL + 'auth/token/verify',
      {
        params,
        headers: {
          'Organization-Secret': OrganizationSecret,
        }
      }
    );

    return response.data as DecodeTokenReferenceResponse

  }

})
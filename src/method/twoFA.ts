import axios from "axios";
import { ConstructorProp, EnableTwoFAResponse, ListTwoFAResponse, VerifyData, VerifyResponse, twoFAType } from "../types";
import URLS from "../utils/URLS";

export const twoFA = ({ AccesssToken }: Pick<ConstructorProp, 'AccesssToken'>) => Object.freeze({

  list: async function (Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Accesss token or  is required');
    const response = await axios.get(
      URLS.BASE_URL + 'auth/2fa/list',
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as ListTwoFAResponse
  },

  enable: async function (type: twoFAType, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Accesss token or  is required');
    const response = await axios.post(
      URLS.BASE_URL + 'auth/2fa/enable',
      { type },
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as EnableTwoFAResponse
  },

  verify: async function (body: VerifyData, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Accesss token or  is required');
    const response = await axios.post(
      URLS.BASE_URL + 'auth/2fa/verify',
      body,
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as VerifyResponse
  }

});
import axios from "axios";
import { ConstructorProp, ListUserParams, ListUserResponse, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";

export const users = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    list: async function (params: ListUserParams = {}, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/users',
        {
          params,
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as ListUserResponse
    },

    activate: async function (body: { user_ids: string[] }, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.put(
        URLS.BASE_URL + 'client/users/activate',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse
    },


    delete: async function (user_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.delete(
        URLS.BASE_URL + 'client/users/delete' + user_id,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse
    },


    deactivate: async function (body: { user_ids: string[] }, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.put(
        URLS.BASE_URL + 'client/users/deactivate',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse
    },

  })
}
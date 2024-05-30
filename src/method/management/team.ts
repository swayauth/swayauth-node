import axios from "axios";
import { AddTeamData, ChangePermissionData, ConstructorProp, ListTeamParams, ListTeamResponse, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";

export const team = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    list: async function (params: ListTeamParams = {}, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/team',
        {
          params,
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as ListTeamResponse
    },

    add: async function (body: AddTeamData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios.post(
        URLS.BASE_URL + 'client/team/create',
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

    delete: async function (member_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios({
        method: 'delete',
        url: URLS.BASE_URL + 'client/team/' + member_id,
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data as VerifyResponse
    },


    permission: async function (member_id: string, body: ChangePermissionData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey)  throw new Error('Application key or accesss token or  is required');
      const response = await axios({
        method: 'patch',
        url: URLS.BASE_URL + 'client/team/permission/' + member_id,
        data: body,
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data as VerifyResponse
    },

  })
}
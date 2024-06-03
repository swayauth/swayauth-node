import axios from "axios";
import FormData from "form-data";
import fs from 'fs';
import {
  ConstructorProp, CreateOrganizationData, CreateOrganizationResponse,
  CreateOrganizationResponseData, CreateTokenData, EditOrganization, GetTokenResponse,
  GetTokenResponseDatum, ListOrganizationResponse, ListOrganizationsParams, VerifyResponse
} from "../../types";
import URLS from "../../utils/URLS";
import { getFileExtension } from "../../utils/getMimeType";

export const organization = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    createOrganization: async function (body: CreateOrganizationData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.post(
        URLS.BASE_URL + 'client/organizations/create',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as CreateOrganizationResponse
    },

    listOrganization: async function (params: ListOrganizationsParams, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/organizations',
        {
          params,
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as ListOrganizationResponse
    },

    editOrganization: async function (body: EditOrganization, org_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.patch(
        URLS.BASE_URL + 'client/organizations/' + org_id,
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse<CreateOrganizationResponseData>
    },

    changeOrganizationLogo: async function (org_id: string, tmp_file_path_or_buffer: string | Buffer, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Access Token or Application Key is required');
      const formData = new FormData();
      if (typeof tmp_file_path_or_buffer == 'string') {
        formData.append('file', fs.createReadStream(tmp_file_path_or_buffer));
      } else {
        formData.append('file', tmp_file_path_or_buffer, 'file' + getFileExtension(tmp_file_path_or_buffer));
      }
      const response = await axios.patch(
        URLS.BASE_URL + 'client/organizations/' + org_id + '/photo',
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
          }
        }
      );
      return response.data as VerifyResponse
    },

    deleteOrganization: async function (org_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.delete(
        URLS.BASE_URL + 'client/organizations/' + org_id,
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


    getTokens: async function (org_id: string, params: ListOrganizationsParams = {}, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/organizations/' + org_id + '/tokens',
        {
          params,
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as GetTokenResponse
    },

    getOneOrganization: async function (org_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/organizations/' + org_id,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse<CreateOrganizationResponseData>
    },

    createToken: async function (org_id: string, body: CreateTokenData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.post(
        URLS.BASE_URL + 'client/organizations/' + org_id + '/tokens',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse<GetTokenResponseDatum>
    },


    editToken: async function (token_id: string, body: CreateTokenData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.post(
        URLS.BASE_URL + 'client/organizations/tokens/' + token_id,
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as VerifyResponse<GetTokenResponseDatum>
    },

    deleteTokens: async function (body: { token_ids: string[] }, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios({
        method: 'delete',
        url: URLS.BASE_URL + 'client/organizations/tokens',
        data: body,
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data as VerifyResponse<GetTokenResponseDatum>
    },

  })
}
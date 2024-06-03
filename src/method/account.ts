import axios from "axios";
import FormData from "form-data";
import fs from 'fs';
import { ChangePhotoResponse, ConstructorProp, GetAccountResponse, GetCompany, LinkedAccountResponse, RegisterData, UpdateCompanyData, UpdateResponse } from "../types";
import URLS from "../utils/URLS";
import { getFileExtension } from "../utils/getMimeType";

export const accountShared = ({ AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) => Object.freeze({
  getAccount: async function (Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Bearer token is required');
    const response = await axios.get(
      URLS.BASE_URL + 'account',
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as GetAccountResponse
  },
  updateAccount: async function (body: Omit<RegisterData, 'email' | 'password'>, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Bearer token is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/user',
      body,
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as UpdateResponse
  },

  changePassword: async function (body: { old_password: string, new_password: string }, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Bearer token is required');

    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/user',
      body,
      {
        headers: {
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as UpdateResponse
  },

  changePhoto: async function (tmp_file_path_or_buffer: string | Buffer, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Bearer token is required');
    const formData = new FormData();
    if (typeof tmp_file_path_or_buffer == 'string') {
      formData.append('file', fs.createReadStream(tmp_file_path_or_buffer));
    } else {
      formData.append('file', tmp_file_path_or_buffer, 'file' + getFileExtension(tmp_file_path_or_buffer));
    }
    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/user',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'Authorization': `Bearer ${Access_Token}`,
        }
      }
    );
    return response.data as ChangePhotoResponse
  }
});

export const accountClient = ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) => Object.freeze({
  getCompanyProfile: async function (Access_Token = AccesssToken) {
    if (!ApplicationKey && !Access_Token) throw new Error('Application Key or access token is required');
    const response = await axios.get(
      URLS.BASE_URL + 'account/company',
      {
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data as GetCompany
  },

  updateCompanyProfile: async function (body: UpdateCompanyData, Access_Token = AccesssToken) {
    if (!ApplicationKey && !Access_Token) throw new Error('Application Key or access token is required');

    const response = await axios.patch(
      URLS.BASE_URL + 'account/company',
      body,
      {
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as GetCompany
  },

  switchAccount: async function (company_id: string, Access_Token = AccesssToken) {
    if (!ApplicationKey && !Access_Token) throw new Error('Application Key or access token is required');

    const response = await axios.put(
      URLS.BASE_URL + 'account/switch/' + company_id,
      {
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as UpdateResponse
  },

  getLinkedAccounts: async function (Access_Token = AccesssToken) {
    if (!Access_Token && !ApplicationKey) throw new Error('Application Key is required');

    const response = await axios.get(
      URLS.BASE_URL + 'account/association',
      {
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as LinkedAccountResponse
  },

});

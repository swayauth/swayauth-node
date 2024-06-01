import axios from "axios";
import fs from 'fs';
import path from 'path';
import { ChangePhotoResponse, ConstructorProp, GetAccountResponse, GetCompany, LinkedAccountResponse, RegisterData, UpdateCompanyData, UpdateResponse } from "../types";
import URLS from "../utils/URLS";

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

  changePhoto: async function (tmp_path: string, Access_Token = AccesssToken) {
    if (!Access_Token) throw new Error('Bearer token is required');
    const fileStream = fs.createReadStream(tmp_path);
    const fileName = path.basename(tmp_path);
    const response = await axios.post(
      URLS.BASE_URL + 'auth/register/user',
      fileStream,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${fileName}"`,
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

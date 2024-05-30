import axios from "axios";
import fs from 'fs';
import path from 'path';
import { ChangePhotoResponse, ConstructorProp, SMTPData, SMTPGetResponse, SMTPResponse, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";

export const smtp = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    setup: async function (body: SMTPData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.post(
        URLS.BASE_URL + 'company/mail/setup',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as SMTPResponse
    },

    get: async function (Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/mail',
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as SMTPGetResponse
    },

    delete: async function (Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.delete(
        URLS.BASE_URL + 'client/mail/delete',
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

    update: async function (body: SMTPData, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.patch(
        URLS.BASE_URL + 'client/mail/update',
        body,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as SMTPResponse
    },


    verify: async function (body: { token: string, reference: string }, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.put(
        URLS.BASE_URL + 'client/mail/verify',
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


    changeLogo: async function (tmp_path: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Organization Secret is required');
      const fileStream = fs.createReadStream(tmp_path);
      const fileName = path.basename(tmp_path);
      const response = await axios.patch(
        URLS.BASE_URL + 'client/mail/photo',
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
    },

  })
}
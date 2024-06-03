import axios from "axios";
import FormData from "form-data";
import fs from 'fs';
import { ChangePhotoResponse, ConstructorProp, SMTPData, SMTPGetResponse, SMTPResponse, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";
import { getFileExtension } from "../../utils/getMimeType";

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

    changeLogo: async function (tmp_file_path_or_buffer: string | Buffer, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Access Token or Application Key is required');
      const formData = new FormData();
      if (typeof tmp_file_path_or_buffer == 'string') {
        formData.append('file', fs.createReadStream(tmp_file_path_or_buffer));
      } else {
        formData.append('file', tmp_file_path_or_buffer, 'file' + getFileExtension(tmp_file_path_or_buffer));
      }
      const response = await axios.patch(
        URLS.BASE_URL + 'client/mail/photo',
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
          }
        }
      );
      return response.data as ChangePhotoResponse
    },

  })
}
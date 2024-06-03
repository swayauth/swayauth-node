import axios from "axios";
import FormData from "form-data";
import fs from 'fs';
import { ConstructorProp, SubscriptionResponse } from "../../types";
import URLS from "../../utils/URLS";
import { getFileExtension } from "../../utils/getMimeType";

export const subscription = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    get: async function (Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'subscription',
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as SubscriptionResponse
    },

  })
}
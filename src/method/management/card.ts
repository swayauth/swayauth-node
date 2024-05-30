import axios from "axios";
import { CardResponse, ConstructorProp, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";

export const card = function ({ ApplicationKey , AccesssToken  }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    list: async function (Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/cards',
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as CardResponse
    },

    delete: async function (card_id: string, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios({
        method: 'delete',
        url: URLS.BASE_URL + 'client/cards/delete/' + card_id,
        headers: {
          'Application-Key': ApplicationKey,
          'Authorization': `Bearer ${Access_Token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data as VerifyResponse
    },


    autosaveCards: async function (allow: boolean, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios({
        method: 'put',
        url: URLS.BASE_URL + 'client/cards/save-cards?status=' + String(allow),
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
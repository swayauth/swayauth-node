import axios from "axios";
import { ConstructorProp, TransactionParams, TransactionResponse, VerifyResponse } from "../../types";
import URLS from "../../utils/URLS";

export const transactions = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    list: async function (params: TransactionParams = {}, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/transactions',
        {
          params,
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as TransactionResponse
    },

  })
}
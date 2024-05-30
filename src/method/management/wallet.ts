import axios from "axios";
import { ConstructorProp, InitPaymentResponse, VerifyResponse, WalletBalanceResponse } from "../../types";
import URLS from "../../utils/URLS";

export const wallet = function ({ ApplicationKey, AccesssToken }: Pick<ConstructorProp, 'ApplicationKey' | 'AccesssToken'>) {
  return Object.freeze({
    balance: async function (Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/wallet/balance',
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as WalletBalanceResponse
    },

    // initPayment: async function (body: { amount: number }, Access_Token = AccesssToken) {
    //   if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
    //   const response = await axios.post(
    //     URLS.BASE_URL + 'client/wallet/init-payment',
    //     body,
    //     {
    //       headers: {
    //         'Application-Key': ApplicationKey,
    //         'Authorization': `Bearer ${Access_Token}`,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   );
    //   return response.data as InitPaymentResponse
    // },


    // useSavedCardToLoadWallet: async function (card_id: string, Access_Token = AccesssToken) {
    //   if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
    //   const response = await axios.get(
    //     URLS.BASE_URL + 'client/wallet/card-payment' + card_id,
    //     {
    //       headers: {
    //         'Application-Key': ApplicationKey,
    //         'Authorization': `Bearer ${Access_Token}`,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   );
    //   return response.data as VerifyResponse
    // },

  })
}
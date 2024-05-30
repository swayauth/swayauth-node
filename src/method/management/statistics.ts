import axios from "axios";
import { ConstructorProp, GraphParam, LoginGraphResponse, PerformanceResponse, SignUpGraphResponse, StatistcsPerformaceParams, UseGraphParams, UserGraphResponse } from "../../types";
import URLS from "../../utils/URLS";

export const statistics = function ({ ApplicationKey, AccesssToken }: ConstructorProp) {
  return Object.freeze({
    performance: async function (params: StatistcsPerformaceParams[], duration: GraphParam, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/statistics/count?duration=' + duration,
        {
          params: params.reduce((prev, k) => {
            prev[k] = '';
            return prev
          }, Object.create(null)),
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as PerformanceResponse
    },

    signUpGraph: async function (duration: GraphParam, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/statistics/registered?duration=' + duration,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as SignUpGraphResponse
    },

    loginGraph: async function (duration: GraphParam, Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/statistics/login?duration=' + duration,
        {
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as LoginGraphResponse
    },

    userGraph: async function (params: UseGraphParams[], Access_Token = AccesssToken) {
      if (!Access_Token && !ApplicationKey) throw new Error('Application key or accesss token or  is required');
      const response = await axios.get(
        URLS.BASE_URL + 'client/users/statistics',
        {
          params: params.reduce((prev, k) => {
            prev[k] = '';
            return prev
          }, Object.create(null)),
          headers: {
            'Application-Key': ApplicationKey,
            'Authorization': `Bearer ${Access_Token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data as UserGraphResponse
    },

  })
}
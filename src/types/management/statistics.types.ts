export type StatistcsPerformaceParams = 'users' | 'sms' | 'mail' | 'google' | 'facebook' | 'manual'

export type GraphParam = '7_days' | '14_days' | '30_days' | '6_months' | '1_year'

export type UseGraphParams = 'users' | 'organizations' | 'active' | 'disabled'

export interface PerformanceResponse {
  data: PerformanceResponseData;
  status: boolean;
  message: string;
}

export interface PerformanceResponseData {
  duration: string;
  users: number;
  sms: number;
  mail: number;
  google: number;
  facebook: number;
  manual: number;
}

export interface SignUpGraphResponse {
  data: SignUpGraphResponseData;
  status: boolean;
  message: string;
}

export interface SignUpGraphResponseData {
  graph: number[];
  duration: GraphParam;
}

export interface LoginGraphResponse {
  data: LoginGraphResponseData;
  status: boolean;
  message: string;
}

export interface LoginGraphResponseData {
  facebook: number;
  google: number;
  manual: number;
  duration: string;
}

export interface UserGraphResponse {
  data:    UserGraphResponseData;
  status:  boolean;
  message: string;
}

export interface UserGraphResponseData {
  users:         number;
  organizations: number;
  active:        number;
  disabled:      number;
}

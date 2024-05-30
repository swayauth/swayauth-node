export type twoFAType = "app" | "mail" | "sms"

export interface ListTwoFAResponse {
  data: twoFAType[];
  status: boolean;
  message: string;
}

export interface EnableTwoFAResponseData {
  qrcode?: string;
  two_factor_type: twoFAType;
  two_factor_enabled: boolean;
  reference: string;
}

export interface EnableTwoFAResponse {
  data: EnableTwoFAResponseData;
  status: boolean;
  message: string;
}

export interface VerifyData {
  token: string;
  reference: string;
}

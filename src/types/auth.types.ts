export interface Metadata {
  statusCode: number;
  timestamp: Date;
  path: string;
}
export interface ManualLoginError {
  status: boolean;
  message: string;
  data: null;
  $metadata: Metadata;
}
export interface Data {
  access_token: string;
  refresh_token: string;
  two_factor_enabled: boolean;
  two_factor_type: 'app' | 'sms' | 'mail_token' | 'mail_link' | null;
}
export interface ManualLoginSuccess {
  data: Data;
  status: boolean;
  message: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  photo?: string;
  email: string;
  password: string;
}

export interface RegisterSuccessData {
  reference: string;
  verify_registration: boolean;
  verify_registration_type: string;
}

export interface RegisterSuccess {
  data: RegisterSuccessData | null;
  status: boolean;
  message: string;
}

export interface VerifySignUpData {
  token: string;
  reference: string;
}

export interface VerifyResponse<T = null> {
  data: T;
  status: boolean;
  message: string;
}

export interface ForgotPasswordResponseData {
  verification_method: string;
  reference: string;
}

export interface ForgotPasswordResponse {
  data: ForgotPasswordResponseData;
  status: boolean;
  message: string;
}

export interface ChangeForgotPassword {
  password: string;
  token: string;
  reference: string;
}

export interface DecodeTokenAndReferenceData {
  token: string,
  reference: string;
}

export interface DecodeTokenReferenceResponseData {
  purpose: string;
  require_password: boolean;
}

export interface DecodeTokenReferenceResponse {
  data: DecodeTokenReferenceResponseData;
  status: boolean;
  message: string;
}


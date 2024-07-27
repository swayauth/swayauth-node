export interface GetAppKeyResponse {
  data: GetAppKeyResponseData;
  status: boolean;
  message: string;
}

export interface GetJwtyResponse {
  data: GetJwtResponseData;
  status: boolean;
  message: string;
}

export interface GetJwtResponseData {
  sub: string;
  email: string;
  scope: string[];
  two_factor_type: null;
  permissions: string[];
  status: string;
  company_id: string;
  organization_token_id: string;
  organization_id: string;
  access: string;
  iat: number;
  exp: number;
}

export interface GetAppKeyResponseData {
  id: string;
  key: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateOrganizationData {
  name: string;
  website: string;
  bio: string;
  photo: string;
}

export interface CreateOrganizationResponse {
  data: CreateOrganizationResponseData;
  status: boolean;
  message: string;
}

export interface CreateOrganizationResponseData {
  id: string;
  photo: string;
  name: string;
  website: string;
  bio: string;
  company_id: string;
  created_at: Date;
  updated_at: Date;
}
export interface ListOrganizationsParams {
  order_by?: 'id' | 'name' | 'organization_token' | 'created_at'
  page?: number | string
  size?: number | string
  direction?: 'asc' | 'desc'
}

export interface ListOrganizationResponse {
  data: ListOrganizationResponseDatum[];
  status: boolean;
  message: string;
}

export interface ListOrganizationResponseDatum {
  id: string;
  photo: string;
  name: string;
  website: string;
  bio: string;
  company_id: string;
  created_at: Date;
  updated_at: Date;
  _count: Count;
}

export interface Count {
  organization_token: number;
}

export interface EditOrganization {
  name: string;
  website: string;
  bio: string;
}

export interface GetTokenResponse {
  data: GetTokenResponseDatum[];
  status: boolean;
  message: string;
}

export interface GetTokenResponseDatum {
  id: string;
  name: string;
  api_key: string;
  redirect_url: string;
  origins: string[];
  two_factor_type: string[];
  verify_registration: boolean;
  verify_registration_type: string;
  company_id: string;
  permissions: string[];
  scope: ('manual' | 'mail' | 'sms')[];
  organization_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateTokenData {
  name: string;
  origins: string[];
  redirect_url: string;
  two_factor_type: ('app' | 'mail' | 'sms')[];
  verify_registration: boolean;
  verify_registration_type: string;
  permissions: string[];
  scope: ('manual' | 'mail' | 'sms')[];
}

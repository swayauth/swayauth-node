export interface GetAccountData {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  ip_address: string;
  email: string;
  status: string;
  verified: boolean;
  photo: string;
  scope: string[];
  permissions: string[];
  access: string;
  two_factor_type: null;
  company_id: string;
  organization_id: string;
  organization_token_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface GetAccountResponse {
  data: GetAccountData;
  status: boolean;
  message: string;
}

export interface UpdateResponse {
  data: UpdateResponseData;
  status: boolean;
  message: string;
}

export interface UpdateResponseData {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  ip_address: string;
  email: string;
  status: string;
  verified: boolean;
  photo: string;
  scope: string[];
  permissions: string[];
  access: string;
  two_factor_type: null;
  company_id: string;
  organization_id: string;
  organization_token_id: string;
  created_at: Date;
  updated_at: Date;
}
export interface ChangePhotoResponse {
  data: ChangePhotoResponse;
  status: boolean;
  message: string;
}

export interface ChangePhotoResponse {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface GetCompany {
  data: GetCompanyData;
  status: boolean;
  message: string;
}

export interface GetCompanyData {
  id: string;
  default_card_id: null;
  name: string;
  email: string;
  status: string;
  address: null;
  city: null;
  state: null;
  country: null;
  verified: boolean;
  save_cards: boolean;
  plan: string;
  app_key_id: string;
  service_email_id: null;
  wallet_id: string;
  created_at: Date;
  updated_at: Date;
}
export interface UpdateCompanyData {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}
export interface LinkedAccountResponse {
  data: LinkedAccountResponseDatum[];
  status: boolean;
  message: string;
}

export interface LinkedAccountResponseDatum {
  id: string;
  verified: boolean;
  creator: boolean;
  permissions: string[];
  access: string;
  company_id: string;
  client_email: string;
  created_at: Date;
  updated_at: Date;
  company: Company;
}

export interface Company {
  id: string;
  name: null;
  status: string;
}

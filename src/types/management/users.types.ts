export interface ListUserParams {
  order_by?: 'id' | 'first_name' | 'last_name' | 'email' | 'status' | 'address' | 'city' | 'state' | 'country'
  page?: number
  size?: number //response array size
  direction?: 'asc' | 'desc'
  organization_id?: string
  search?: string
}

export interface ListUserResponse {
  data:    ListUserResponseDatum[];
  status:  boolean;
  message: string;
}

export interface ListUserResponseDatum {
  id:                    string;
  first_name:            string;
  last_name:             string;
  phone:                 string;
  address:               string;
  city:                  string;
  state:                 string;
  country:               string;
  ip_address:            string;
  email:                 string;
  status:                string;
  verified:              boolean;
  photo:                 string;
  scope:                 string[];
  permissions:           string[];
  access:                string;
  two_factor_type:       null;
  company_id:            string;
  organization_id:       string;
  organization_token_id: string;
  created_at:            Date;
  updated_at:            Date;
  organization:          Organization;
}

export interface Organization {
  name: string;
}

export interface ListTeamParams {
  order_by?: 'id' | 'first_name' | 'last_name' | 'email' | 'status' | 'created_at' | 'address' | 'city' | 'state' | 'country'
  page?: number | string
  size?: number | string
  direction?: 'asc' | 'desc'
}

export interface ListTeamResponse {
  data: ListTeamResponseDatum[];
  status: boolean;
  message: string;
}

export interface ListTeamResponseDatum {
  id: string;
  first_name: string;
  last_name: string;
  phone: null | string;
  address: null | string;
  city: null | string;
  state: null | string;
  country: null | string;
  ip_address: string;
  email: string;
  status: string;
  verified: boolean;
  photo: string;
  scope: string[];
  two_factor_type: string;
  company_id: string;
  created_at: Date;
  updated_at: Date;
  association: Association;
}

export interface Association {
  id: string;
  verified: boolean;
  creator: boolean;
  permissions: string[];
  access: string;
  company_id: string;
  client_email: string;
  created_at: Date;
  updated_at: Date;
}

export interface AddTeamData {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  photo: string;
  email: string;
  access: string;
  permissions: ('read' | 'write' | 'delete')[];
}

export interface ChangePermissionData {
  access: string;
  permissions: ('read' | 'write' | 'delete')[];
}

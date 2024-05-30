export interface SMTPData {
  company_name: string;
  website: string;
  email: string;
  username: string;
  password: string;
  host: string;
}

export interface SMTPResponse {
  data: SMTPResponseData;
  status: boolean;
  message: string;
}

export interface SMTPResponseData {
  reference: string;
  verification_enabled: boolean;
  verification_type: string;
}
export interface SMTPGetResponse {
  data: {
    id: string;
    company_name: string;
    verified: boolean;
    website: string;
    email: string;
    photo: string;
    username: string;
    password: string;
    host: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
  } | null
  status: boolean;
  message: string;
}


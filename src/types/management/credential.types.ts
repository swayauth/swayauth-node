export interface GetAppKeyResponse {
  data:    GetAppKeyResponseData;
  status:  boolean;
  message: string;
}

export interface GetAppKeyResponseData {
  id:         string;
  key:        string;
  created_at: Date;
  updated_at: Date;
}

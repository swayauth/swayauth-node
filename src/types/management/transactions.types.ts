export interface TransactionParams {
  page?: number | string;
  size?: number | string;
}

export interface TransactionResponse {
  data: TransactionResponseDatum[];
  status: boolean;
  message: string;
}

export interface TransactionResponseDatum {
  id: string;
  amount: number;
  type: string;
  purpose: string;
  status: string;
  reference: string;
  company_id: string;
  created_at: Date;
  updated_at: Date;
}

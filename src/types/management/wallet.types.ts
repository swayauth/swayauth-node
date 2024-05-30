export interface WalletBalanceResponse {
  data:    WalletBalanceResponseData;
  status:  boolean;
  message: string;
}

export interface WalletBalanceResponseData {
  id:     string;
  amount: number;
}

export interface InitPaymentResponse {
  data:    InitPaymentResponseData;
  status:  boolean;
  message: string;
}

export interface InitPaymentResponseData {
  authorization_url: string;
  access_code:       string;
  reference:         string;
}

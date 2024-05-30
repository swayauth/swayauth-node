export interface CardResponse {
  data:    CardResponseDatum[];
  status:  boolean;
  message: string;
}

export interface CardResponseDatum {
  id:            string;
  first_6digit:  string;
  last_4digit:   string;
  exp_month:     string;
  exp_year:      string;
  country_code:  string;
  card_type:     string;
  bank:          string;
  account_name:  null;
  company_email: string;
  created_at:    Date;
  updated_at:    Date;
}

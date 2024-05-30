export interface SubscriptionResponse {
  data: {
    id: string;
    amount: number;
    subscription: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
  };
  status: boolean;
  message: string;
}
export * from './card.types'
export * from './credential.types'
export * from './organization.types'
export * from './smtp.types'
export * from './statistics.types'
export * from './team.types'
export * from './transactions.types'
export * from './users.types'
export * from './wallet.types'

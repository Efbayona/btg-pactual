export interface SubscriptionFound {
  user: string;
  found: string;
  amount: number;
}

export interface Found {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  category: string;
}

export interface SubscribeFundRequest {
  acquire_funds_id: string;
  document_user: string;
  transaction_type: string;
}

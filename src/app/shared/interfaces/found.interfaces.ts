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
  user: string;
  found: string;
  amount: number;
}


// User entity
export interface User {
  evmAddress: string;
  privyUserId?: string;
  farcasterUserId?: string;
  registeredAt: Date;
}

// Creator entity
export interface Creator {
  userId: string;
  profileUrl?: string;
  bio?: string;
  createdAt: Date;
}

// Tier entity
export interface Tier {
  tierId: string;
  creatorId: string;
  name: string;
  description: string;
  entryRequirementType: 'nft' | 'access_key' | 'subscription';
  entryRequirementValue: string;
  price: string;
  priceCurrency: 'ETH' | 'USDC';
  recurrence?: 'monthly' | 'yearly';
  createdAt: Date;
}

// AccessKey entity
export interface AccessKey {
  keyId: string;
  userId: string;
  tierId: string;
  issuedAt: Date;
  expiresAt?: Date;
  status: 'active' | 'revoked';
}

// Subscription entity
export interface Subscription {
  subscriptionId: string;
  userId: string;
  tierId: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'canceled' | 'expired';
  paymentIntentId?: string;
}

// Chat message entity
export interface ChatMessage {
  messageId: string;
  tierId: string;
  userId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'system';
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface SubscriptionRequest {
  tierId: string;
  userAddress: string;
  paymentSignature: string;
}

export interface AccessVerificationRequest {
  tierId: string;
  userAddress: string;
}

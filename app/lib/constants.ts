
// Base network configuration
export const BASE_MAINNET_CHAIN_ID = 8453;

// Contract addresses (placeholder - replace with actual deployed contracts)
export const CONTRACTS = {
  FORGESTREAM_SUBSCRIPTION: "0x0000000000000000000000000000000000000000",
  USDC_BASE: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  WETH_BASE: "0x4200000000000000000000000000000000000006",
} as const;

// API endpoints
export const API_ENDPOINTS = {
  NEYNAR_BASE: "https://api.neynar.com/v2",
  PRIVY_BASE: "https://api.privy.io",
  IRYS_BASE: "https://api.irys.io",
} as const;

// Subscription tiers and pricing
export const TIER_LIMITS = {
  MAX_TIERS_PER_CREATOR: 5,
  MIN_PRICE_ETH: "0.001",
  MAX_PRICE_ETH: "1.0",
  SUPPORTED_CURRENCIES: ["ETH", "USDC"] as const,
  SUPPORTED_RECURRENCE: ["monthly", "yearly"] as const,
} as const;

// Chat configuration
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 500,
  MAX_MESSAGES_PER_LOAD: 50,
  RATE_LIMIT_MESSAGES_PER_MINUTE: 10,
} as const;

// Access key configuration
export const ACCESS_KEY_CONFIG = {
  DEFAULT_EXPIRY_DAYS: 30,
  MAX_KEYS_PER_USER: 100,
} as const;

// UI configuration
export const UI_CONFIG = {
  ANIMATION_DURATION_MS: 250,
  DEBOUNCE_DELAY_MS: 300,
  TOAST_DURATION_MS: 5000,
} as const;

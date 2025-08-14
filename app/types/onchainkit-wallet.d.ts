declare module '@coinbase/onchainkit/wallet' {
  export function ConnectWallet(props: { children?: any }): any;
  export function Wallet(props: { children?: any, className?: string }): any;
  export function WalletDropdown(props: { children?: any }): any;
  export function WalletDropdownDisconnect(props: { children?: any }): any;
}


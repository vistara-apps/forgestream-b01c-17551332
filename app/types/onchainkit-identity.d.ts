declare module '@coinbase/onchainkit/identity' {
  export function Name(props: { className?: string }): any;
  export function Identity(props: { 
    className?: string, 
    hasCopyAddressOnClick?: boolean,
    children?: any
  }): any;
  export function Address(props: { className?: string }): any;
  export function Avatar(props: { className?: string }): any;
  export function EthBalance(props: { className?: string }): any;
}


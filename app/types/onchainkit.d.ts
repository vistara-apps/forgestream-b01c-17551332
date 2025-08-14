declare module '@coinbase/onchainkit/minikit' {
  export function useMiniKit(): any;
  export function useFrameMessage(): any;
  export function useFrameReducer(): any;
  export function useAddFrame(): any;
  export function useOpenUrl(): any;
  export function MiniKitProvider(props: { 
    children?: any,
    apiKey?: string,
    chain?: any,
    config?: any
  }): any;
}


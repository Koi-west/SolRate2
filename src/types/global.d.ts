// src/types/global.d.ts

import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

declare global {
  interface Window {
    solana?: { isPhantom?: boolean } & PhantomWalletAdapter;
  }
}

export {};

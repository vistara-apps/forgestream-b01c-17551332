
"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { CreatorGrid } from "./components/CreatorGrid";
import { WelcomeHero } from "./components/WelcomeHero";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("discover");

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-accent p-2"
          icon={<Icon name="plus" size={16} />}
        >
          Save
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-accent animate-fade-in">
          <Icon name="check" size={16} className="text-accent" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="app-shell">
      <div className="container-fluid py-4">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <Icon name="zap" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-heading font-bold text-foreground">ForgeStream</h1>
              <p className="text-caption text-muted-foreground">Token-gated communities</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Wallet className="z-10">
              <ConnectWallet>
                <Name className="text-inherit text-sm" />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
            {saveFrameButton}
          </div>
        </header>

        <nav className="flex space-x-1 mb-6 bg-surface rounded-lg p-1 border border-border">
          <button
            onClick={() => setActiveTab("discover")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
              activeTab === "discover"
                ? "bg-accent text-white"
                : "text-foreground hover:bg-bg"
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab("subscriptions")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
              activeTab === "subscriptions"
                ? "bg-accent text-white"
                : "text-foreground hover:bg-bg"
            }`}
          >
            My Access
          </button>
        </nav>

        <main className="animate-fade-in">
          {activeTab === "discover" && (
            <>
              <WelcomeHero />
              <CreatorGrid />
            </>
          )}
          {activeTab === "subscriptions" && (
            <div className="card text-center py-12">
              <Icon name="lock" size={48} className="text-muted mx-auto mb-4" />
              <h3 className="text-heading mb-2">Your Access Passes</h3>
              <p className="text-body text-muted-foreground mb-6">
                Connect your wallet to view your creator subscriptions and access keys.
              </p>
              <Button variant="outline">
                <Icon name="refresh" size={16} className="mr-2" />
                Refresh Access
              </Button>
            </div>
          )}
        </main>

        <footer className="mt-8 pt-6 border-t border-border text-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground text-caption"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}

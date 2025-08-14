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
import { NoSubscriptionsState } from "./components/EmptyState";

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
    <div className="app-shell min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center shadow-sm">
              <Icon name="zap" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">ForgeStream</h1>
              <p className="text-sm text-muted-foreground">Token-gated communities</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <Wallet className="z-10">
              <ConnectWallet>
                <Name className="text-inherit text-sm hidden sm:block" />
                <div className="sm:hidden">
                  <Icon name="wallet" size="md" />
                </div>
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

        <nav className="flex space-x-1 mb-6 bg-surface rounded-lg p-1 border border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("discover")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 flex-1 ${
              activeTab === "discover"
                ? "bg-accent text-white"
                : "text-foreground hover:bg-bg"
            }`}
            aria-selected={activeTab === "discover"}
            role="tab"
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab("subscriptions")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 flex-1 ${
              activeTab === "subscriptions"
                ? "bg-accent text-white"
                : "text-foreground hover:bg-bg"
            }`}
            aria-selected={activeTab === "subscriptions"}
            role="tab"
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
            <div className="animate-fade-in">
              {context?.client.address ? (
                <NoSubscriptionsState 
                  onRefresh={() => {
                    // In a real app, this would refresh the user's subscriptions
                    console.log("Refreshing access for:", context.client.address);
                  }} 
                />
              ) : (
                <div className="card text-center py-8 sm:py-12">
                  <Icon name="wallet" size={48} className="text-muted mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Connect Your Wallet</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto">
                    Connect your wallet to view your creator subscriptions and access keys.
                  </p>
                  <Wallet>
                    <ConnectWallet>
                      <Button variant="default">
                        <Icon name="wallet" size={16} className="mr-2" />
                        Connect Wallet
                      </Button>
                    </ConnectWallet>
                  </Wallet>
                </div>
              )}
            </div>
          )}
        </main>

        <footer className="mt-8 pt-6 border-t border-border text-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground text-xs sm:text-sm"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

interface WalletStatusProps {
  isConnected: boolean;
  address?: string;
  chainId?: number;
  expectedChainId?: number;
  onConnect: () => void;
  onSwitchNetwork?: () => void;
  className?: string;
}

export function WalletStatus({
  isConnected,
  address,
  chainId,
  expectedChainId,
  onConnect,
  onSwitchNetwork,
  className = "",
}: WalletStatusProps) {
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  
  useEffect(() => {
    if (isConnected && chainId && expectedChainId) {
      setIsWrongNetwork(chainId !== expectedChainId);
    } else {
      setIsWrongNetwork(false);
    }
  }, [isConnected, chainId, expectedChainId]);

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (!isConnected) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onConnect}
        className={`flex items-center ${className}`}
      >
        <Icon name="wallet" size={16} className="mr-2" />
        <span className="hidden sm:inline">Connect Wallet</span>
        <span className="sm:hidden">Connect</span>
      </Button>
    );
  }

  if (isWrongNetwork) {
    return (
      <Tooltip content="Switch to the correct network to continue">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onSwitchNetwork}
          className={`flex items-center text-destructive border-destructive/50 ${className}`}
        >
          <Icon name="alertCircle" size={16} className="mr-2" />
          <span className="hidden sm:inline">Wrong Network</span>
          <span className="sm:hidden">Switch</span>
        </Button>
      </Tooltip>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <Tooltip content={address || ""}>
        <span className="text-sm font-medium">
          {address ? formatAddress(address) : "Connected"}
        </span>
      </Tooltip>
    </div>
  );
}


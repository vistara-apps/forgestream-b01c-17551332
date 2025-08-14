"use client";

import { Button } from "./Button";
import { Icon } from "./Icon";

interface Tier {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  recurrence: string;
  memberCount: number;
}

interface TierCardProps {
  tier: Tier;
}

export function TierCard({ tier }: TierCardProps) {
  const handleSubscribe = () => {
    // TODO: Implement subscription flow
    console.log(`Subscribing to tier: ${tier.name}`);
  };

  const handleJoinChat = () => {
    // TODO: Implement chat access verification
    console.log(`Joining chat for tier: ${tier.name}`);
  };

  return (
    <div className="tier-card bg-surface/50 border border-border/50 hover:border-accent/30 transition-all duration-250">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
        <div>
          <h6 className="text-base font-medium flex items-center mb-1">
            <Icon name="crown" size={16} className="mr-2 text-accent" />
            {tier.name}
          </h6>
          <p className="text-sm text-muted-foreground">{tier.description}</p>
        </div>
        <div className="text-right sm:ml-4 bg-bg/50 px-3 py-1 rounded-md self-start">
          <div className="text-base font-semibold">
            {tier.price} {tier.currency}
          </div>
          <div className="text-xs text-muted-foreground">
            /{tier.recurrence}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center">
            <Icon name="users" size={14} className="mr-1" />
            {tier.memberCount} members
          </span>
          <span className="flex items-center">
            <Icon name="message" size={14} className="mr-1" />
            Chat access
          </span>
        </div>
        
        <div className="flex space-x-2 w-full sm:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleJoinChat}
            className="flex-1 sm:flex-initial"
          >
            <Icon name="message" size={14} className="mr-1" />
            Preview
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleSubscribe}
            className="flex-1 sm:flex-initial"
          >
            <Icon name="lock" size={14} className="mr-1" />
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

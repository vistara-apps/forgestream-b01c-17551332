
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
    <div className="tier-card bg-surface/50 border border-border/50">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h6 className="text-subheading font-medium flex items-center">
            <Icon name="crown" size={16} className="mr-2 text-accent" />
            {tier.name}
          </h6>
          <p className="text-body text-muted-foreground">{tier.description}</p>
        </div>
        <div className="text-right">
          <div className="text-subheading font-semibold">
            {tier.price} {tier.currency}
          </div>
          <div className="text-caption text-muted-foreground">
            /{tier.recurrence}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-caption text-muted-foreground">
          <span className="flex items-center">
            <Icon name="users" size={14} className="mr-1" />
            {tier.memberCount} members
          </span>
          <span className="flex items-center">
            <Icon name="message" size={14} className="mr-1" />
            Chat access
          </span>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleJoinChat}>
            <Icon name="message" size={14} className="mr-1" />
            Preview
          </Button>
          <Button variant="default" size="sm" onClick={handleSubscribe}>
            <Icon name="lock" size={14} className="mr-1" />
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

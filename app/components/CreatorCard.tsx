
"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { TierCard } from "./TierCard";

interface Tier {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  recurrence: string;
  memberCount: number;
}

interface Creator {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  followers: number;
  tiers: Tier[];
}

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card animate-slide-up">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-semibold">
          {creator.avatar}
        </div>
        <div className="flex-1">
          <h4 className="text-subheading font-semibold mb-1">{creator.name}</h4>
          <p className="text-body text-muted-foreground mb-2">{creator.bio}</p>
          <div className="flex items-center space-x-4 text-caption text-muted-foreground">
            <span className="flex items-center">
              <Icon name="users" size={14} className="mr-1" />
              {creator.followers.toLocaleString()} followers
            </span>
            <span className="flex items-center">
              <Icon name="crown" size={14} className="mr-1" />
              {creator.tiers.length} tier{creator.tiers.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setExpanded(!expanded)}
        >
          <Icon name={expanded ? "minus" : "plus"} size={16} />
        </Button>
      </div>

      {expanded && (
        <div className="space-y-3 animate-fade-in">
          <div className="border-t border-border pt-4">
            <h5 className="text-subheading font-medium mb-3">Access Tiers</h5>
            <div className="space-y-3">
              {creator.tiers.map((tier) => (
                <TierCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

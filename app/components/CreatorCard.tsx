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
    <div className="card animate-slide-up hover:shadow-md transition-shadow duration-250">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-semibold shadow-sm">
          {creator.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h4 className="text-lg font-semibold mb-1">{creator.name}</h4>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="ml-2 -mt-1 -mr-2"
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse creator details" : "Expand creator details"}
            >
              <Icon name={expanded ? "minus" : "plus"} size={16} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{creator.bio}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
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
      </div>

      {expanded && (
        <div className="space-y-3 animate-fade-in">
          <div className="border-t border-border pt-4">
            <h5 className="text-lg font-medium mb-3">Access Tiers</h5>
            <div className="space-y-4">
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

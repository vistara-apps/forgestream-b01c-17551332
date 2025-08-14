
"use client";

import { useState } from "react";
import { CreatorCard } from "./CreatorCard";

// Mock data for demonstration
const mockCreators = [
  {
    id: "1",
    name: "Alex Chen",
    bio: "Digital artist creating generative art and NFT collections",
    avatar: "AC",
    followers: 2340,
    tiers: [
      {
        id: "t1",
        name: "Supporter",
        description: "Access to exclusive artwork previews",
        price: "0.01",
        currency: "ETH",
        recurrence: "monthly",
        memberCount: 150,
      },
      {
        id: "t2", 
        name: "Inner Circle",
        description: "Direct access to creator + early drops",
        price: "0.05",
        currency: "ETH", 
        recurrence: "monthly",
        memberCount: 45,
      },
    ],
  },
  {
    id: "2",
    name: "Maya Rodriguez",
    bio: "Music producer and electronic artist",
    avatar: "MR",
    followers: 1820,
    tiers: [
      {
        id: "t3",
        name: "Fan Club",
        description: "Unreleased tracks and behind-the-scenes",
        price: "0.02",
        currency: "ETH",
        recurrence: "monthly", 
        memberCount: 89,
      },
    ],
  },
  {
    id: "3",
    name: "Dev Protocol",
    bio: "Building the future of decentralized applications",
    avatar: "DP",
    followers: 5670,
    tiers: [
      {
        id: "t4",
        name: "Builder",
        description: "Access to private dev discussions",
        price: "0.03",
        currency: "ETH",
        recurrence: "monthly",
        memberCount: 234,
      },
      {
        id: "t5",
        name: "Core",
        description: "Technical deep-dives and roadmap access",
        price: "0.1", 
        currency: "ETH",
        recurrence: "monthly",
        memberCount: 67,
      },
    ],
  },
];

export function CreatorGrid() {
  const [creators] = useState(mockCreators);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-heading">Featured Creators</h3>
        <span className="text-caption text-muted-foreground">
          {creators.length} creators
        </span>
      </div>
      
      <div className="grid gap-6">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}

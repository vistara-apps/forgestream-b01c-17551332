"use client";

import { useState, useEffect } from "react";
import { CreatorCard } from "./CreatorCard";
import { CreatorGridSkeleton } from "./SkeletonLoader";
import { NoCreatorsState } from "./EmptyState";
import { Icon } from "./Icon";
import { useToast } from "./Toast";

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
  const [creators, setCreators] = useState<typeof mockCreators>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    // Simulate API call with a delay
    const fetchCreators = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setCreators(mockCreators);
      } catch (err) {
        console.error("Error fetching creators:", err);
        setError("Failed to load creators. Please try again.");
        showToast("Failed to load creators", "error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreators();
  }, [showToast]);

  const handleRefresh = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call with a shorter delay for refresh
      await new Promise(resolve => setTimeout(resolve, 800));
      setCreators(mockCreators);
      showToast("Creators refreshed successfully", "success");
    } catch (err) {
      console.error("Error refreshing creators:", err);
      setError("Failed to refresh creators. Please try again.");
      showToast("Failed to refresh creators", "error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <CreatorGridSkeleton />;
  }

  if (error || creators.length === 0) {
    return <NoCreatorsState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl sm:text-2xl font-semibold">Featured Creators</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground">
            {creators.length} creators
          </span>
          <button 
            onClick={handleRefresh}
            className="p-1 rounded-full hover:bg-bg transition-colors"
            aria-label="Refresh creators"
          >
            <Icon name="refresh" size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>
      
      <div className="grid gap-6">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}

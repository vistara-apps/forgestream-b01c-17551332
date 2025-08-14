
import { NextRequest, NextResponse } from "next/server";

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
        entryRequirementType: "subscription",
      },
      {
        id: "t2",
        name: "Inner Circle", 
        description: "Direct access to creator + early drops",
        price: "0.05",
        currency: "ETH",
        recurrence: "monthly", 
        memberCount: 45,
        entryRequirementType: "subscription",
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
        entryRequirementType: "subscription",
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
        entryRequirementType: "subscription",
      },
      {
        id: "t5",
        name: "Core",
        description: "Technical deep-dives and roadmap access",
        price: "0.1",
        currency: "ETH",
        recurrence: "monthly",
        memberCount: 67,
        entryRequirementType: "subscription", 
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  try {
    // In a real app, this would fetch from database
    return NextResponse.json({
      success: true,
      data: mockCreators,
    });
  } catch (error) {
    console.error("Error fetching creators:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch creators",
      },
      { status: 500 }
    );
  }
}

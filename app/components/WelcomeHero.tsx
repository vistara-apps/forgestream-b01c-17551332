"use client";

import { Button } from "./Button";
import { Icon } from "./Icon";

export function WelcomeHero() {
  return (
    <div className="card mb-8 text-center bg-gradient-to-br from-surface to-bg border-accent/20 shadow-lg">
      <div className="mb-6">
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md transform hover:scale-105 transition-transform duration-250">
          <Icon name="crown" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Join Exclusive Creator Communities
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          Discover creators, unlock premium content, and connect with like-minded fans through token-gated access and micro-subscriptions.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          variant="default"
          className="w-full sm:w-auto"
        >
          <Icon name="star" size={16} className="mr-2" />
          Explore Creators
        </Button>
        <Button 
          variant="outline"
          className="w-full sm:w-auto"
        >
          <Icon name="shield" size={16} className="mr-2" />
          How It Works
        </Button>
      </div>
    </div>
  );
}

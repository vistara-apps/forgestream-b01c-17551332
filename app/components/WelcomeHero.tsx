"use client";

import { Button } from "./Button";
import { Icon } from "./Icon";

export function WelcomeHero() {
  return (
    <div className="card mb-8 text-center bg-gradient-to-br from-surface to-bg border-accent/20">
      <div className="mb-6">
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon name="crown" size="lg" className="text-white" />
        </div>
        <h2 className="text-display mb-4">
          Join Exclusive Creator Communities
        </h2>
        <p className="text-body text-muted-foreground max-w-md mx-auto">
          Discover creators, unlock premium content, and connect with like-minded fans through token-gated access and micro-subscriptions.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="default">
          <Icon name="star" size="sm" className="mr-2" />
          Explore Creators
        </Button>
        <Button variant="outline">
          <Icon name="shield" size="sm" className="mr-2" />
          How It Works
        </Button>
      </div>
    </div>
  );
}

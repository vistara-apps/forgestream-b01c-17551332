"use client";

import { Icon } from "./Icon";
import { Button } from "./Button";
import { type ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline";
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline";
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`card text-center py-8 sm:py-12 ${className}`}>
      {icon && <div className="mx-auto mb-4">{icon}</div>}
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto">
          {description}
        </p>
      )}
      {(action || secondaryAction) && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {action && (
            <Button
              variant={action.variant || "default"}
              onClick={action.onClick}
              className="w-full sm:w-auto"
            >
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant={secondaryAction.variant || "outline"}
              onClick={secondaryAction.onClick}
              className="w-full sm:w-auto"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export function NoSubscriptionsState({ onRefresh }: { onRefresh: () => void }) {
  return (
    <EmptyState
      icon={<Icon name="lock" size={48} className="text-muted" />}
      title="No Access Passes Found"
      description="Subscribe to creators to unlock exclusive content and join their communities."
      action={{
        label: "Explore Creators",
        onClick: () => window.location.href = "#discover",
        variant: "default",
      }}
      secondaryAction={{
        label: "Refresh Access",
        onClick: onRefresh,
        variant: "outline",
      }}
    />
  );
}

export function NoCreatorsState() {
  return (
    <EmptyState
      icon={<Icon name="users" size={48} className="text-muted" />}
      title="No Creators Found"
      description="We couldn't find any creators at the moment. Please check back later."
      action={{
        label: "Refresh",
        onClick: () => window.location.reload(),
        variant: "default",
      }}
    />
  );
}

export function NoSearchResultsState({ query, onClear }: { query: string; onClear: () => void }) {
  return (
    <EmptyState
      icon={<Icon name="search" size={48} className="text-muted" />}
      title="No Results Found"
      description={`We couldn't find any creators matching "${query}". Try a different search term.`}
      action={{
        label: "Clear Search",
        onClick: onClear,
        variant: "default",
      }}
    />
  );
}


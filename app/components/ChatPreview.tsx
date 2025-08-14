"use client";

import { Icon } from "./Icon";

interface ChatPreviewProps {
  tierName: string;
  memberCount: number;
  lastMessage?: string;
  isLocked: boolean;
  onClick: () => void;
}

export function ChatPreview({
  tierName,
  memberCount,
  lastMessage,
  isLocked,
  onClick,
}: ChatPreviewProps) {
  return (
    <div className="chat-preview" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name={isLocked ? "lock" : "messageCircle"} size="sm" className="text-accent" />
          </div>
          <div>
            <h4 className="text-lg font-medium">{tierName} Chat</h4>
            <p className="text-sm text-muted-foreground">
              {memberCount} members
            </p>
          </div>
        </div>
        {isLocked && (
          <div className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">
            Locked
          </div>
        )}
      </div>
      {lastMessage && !isLocked && (
        <p className="text-sm text-muted-foreground mt-2 truncate">
          {lastMessage}
        </p>
      )}
    </div>
  );
}

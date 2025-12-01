"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, Inbox, RefreshCw } from "lucide-react";

interface ChatEmptyStateProps {
  type: "no-selection" | "no-messages" | "loading";
}

export function ChatEmptyState({ type }: ChatEmptyStateProps) {
  if (type === "loading") {
    return (
      <div className="flex flex-col h-full bg-gradient-to-b from-muted/30 to-background">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>

        {/* Messages Skeleton */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* User message skeleton */}
          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16 ml-auto" />
              <Skeleton className="h-16 w-64 rounded-2xl rounded-tr-md" />
            </div>
          </div>

          {/* AI message skeleton */}
          <div className="flex gap-3 max-w-[80%]">
            <Skeleton className="size-8 rounded-full shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-24 w-72 rounded-2xl rounded-tl-md" />
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16 ml-auto" />
              <Skeleton className="h-12 w-48 rounded-2xl rounded-tr-md" />
            </div>
          </div>

          {/* AI message skeleton */}
          <div className="flex gap-3 max-w-[80%]">
            <Skeleton className="size-8 rounded-full shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-32 w-80 rounded-2xl rounded-tl-md" />
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16 ml-auto" />
              <Skeleton className="h-14 w-56 rounded-2xl rounded-tr-md" />
            </div>
          </div>
        </div>

        {/* Input Skeleton */}
        <div className="p-4 border-t border-border">
          <div className="flex items-end gap-2">
            <Skeleton className="flex-1 h-11 rounded-md" />
            <Skeleton className="size-11 rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "no-selection") {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-muted/30 to-background px-4">
        <div className="max-w-sm text-center space-y-4">
          <div className="size-20 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
            <Inbox className="size-10 text-muted-foreground/50" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">No Conversation Selected</h3>
            <p className="text-sm text-muted-foreground">
              Select a conversation from the sidebar to start chatting with customers
              or view their history.
            </p>
          </div>
          <div className="pt-2">
            <Button variant="outline" size="sm" className="gap-2">
              <MessageSquare className="size-4" />
              View All Conversations
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (type === "no-messages") {
    return (
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="max-w-sm text-center space-y-4">
          <div className="size-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center">
            <MessageSquare className="size-8 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Start the Conversation</h3>
            <p className="text-sm text-muted-foreground">
              This is a new conversation. Send a message to get started or wait
              for the customer to respond.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// Skeleton for conversation sidebar items
export function ConversationSkeleton() {
  return (
    <div className="space-y-2 p-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2">
          <Skeleton className="size-9 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-12" />
            </div>
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Skeleton for info panel
export function InfoPanelSkeleton() {
  return (
    <div className="p-4 space-y-4">
      {/* AI Status Skeleton */}
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>

      <Skeleton className="h-px w-full" />

      {/* Suggestion Card Skeleton */}
      <div className="space-y-3 p-4 rounded-lg border">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
        <Skeleton className="h-8 w-full" />
      </div>

      {/* Context Card Skeleton */}
      <div className="space-y-3 p-4 rounded-lg border">
        <Skeleton className="h-4 w-28" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-24" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-14" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}


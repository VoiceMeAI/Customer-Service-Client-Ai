"use client";

import { ChatPanel } from "@/components/layouts/(dashboard)/chat-panel";
import { ChatEmptyState } from "@/components/layouts/(dashboard)/chat-empty-state";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, Loader2, MessageSquare, Inbox } from "lucide-react";
import { useState } from "react";

type ViewState = "chat" | "loading" | "no-selection" | "no-messages";

export default function DashboardPage() {
  const [viewState, setViewState] = useState<ViewState>("chat");

  return (
    <div className="relative h-full">
      {/* Demo View State Switcher */}
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs shadow-md bg-background">
              <Eye className="size-3.5" />
              View States
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-xs">Demo States</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setViewState("chat")}>
              <MessageSquare className="size-4 mr-2" />
              Active Chat
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setViewState("loading")}>
              <Loader2 className="size-4 mr-2" />
              Loading State
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setViewState("no-selection")}>
              <Inbox className="size-4 mr-2" />
              No Selection
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setViewState("no-messages")}>
              <MessageSquare className="size-4 mr-2" />
              No Messages
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Render based on view state */}
      {viewState === "chat" && <ChatPanel />}
      {viewState === "loading" && <ChatEmptyState type="loading" />}
      {viewState === "no-selection" && <ChatEmptyState type="no-selection" />}
      {viewState === "no-messages" && (
        <div className="flex flex-col h-full bg-gradient-to-b from-muted/30 to-background">
          {/* Minimal header for no-messages state */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/80">
            <div className="size-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
              NC
            </div>
            <div>
              <h2 className="font-semibold text-sm">New Customer</h2>
              <p className="text-xs text-muted-foreground">Started just now</p>
            </div>
          </div>
          <ChatEmptyState type="no-messages" />
          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your first message..."
                className="flex-1 h-11 px-4 rounded-md border border-input bg-background text-sm"
              />
              <Button className="h-11 px-6 bg-emerald-600 hover:bg-emerald-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


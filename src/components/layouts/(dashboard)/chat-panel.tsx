"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bot,
  Check,
  CheckCheck,
  ChevronDown,
  Hand,
  Loader2,
  Paperclip,
  Plus,
  Send,
  Smile,
  Tag,
  UserCheck,
  X,
} from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

// Dummy message data
const initialMessages = [
  {
    id: "1",
    content:
      "Hello! I need help with my hotel booking. I made a reservation for next week but I need to change the dates.",
    sender: "user",
    senderName: "Sarah Johnson",
    timestamp: "10:23 AM",
    status: "read" as const,
  },
  {
    id: "2",
    content:
      "Hello Sarah! I'd be happy to help you with your booking modification. Could you please provide me with your reservation number so I can look up your booking details?",
    sender: "ai",
    senderName: "AI Assistant",
    timestamp: "10:23 AM",
  },
  {
    id: "3",
    content:
      "Yes, it's RES-2024-78543. I originally booked for December 15-18, but I need to change it to December 20-23.",
    sender: "user",
    senderName: "Sarah Johnson",
    timestamp: "10:24 AM",
    status: "read" as const,
  },
  {
    id: "4",
    content:
      "Thank you for providing your reservation number. I've found your booking for a Deluxe Room at our Downtown location. Let me check the availability for December 20-23...",
    sender: "ai",
    senderName: "AI Assistant",
    timestamp: "10:24 AM",
  },
  {
    id: "5",
    content:
      "Great news! We have availability for your preferred dates. The Deluxe Room is available from December 20-23. The rate would be $189/night, which is the same as your original booking. Would you like me to proceed with this change?",
    sender: "ai",
    senderName: "AI Assistant",
    timestamp: "10:25 AM",
  },
  {
    id: "6",
    content:
      "That sounds perfect! But actually, I was wondering if there are any suites available? It's going to be a special occasion.",
    sender: "user",
    senderName: "Sarah Johnson",
    timestamp: "10:26 AM",
    status: "read" as const,
  },
  {
    id: "7",
    content:
      "I understand you're looking for something special! Let me connect you with one of our agents who can discuss our suite options and any special packages we might have available for your occasion.",
    sender: "ai",
    senderName: "AI Assistant",
    timestamp: "10:26 AM",
    isEscalation: true,
  },
  {
    id: "8",
    content:
      "Hi Sarah! I'm John, and I'll be taking over from here. I see you're interested in our suites for a special occasion from December 20-23. We have some wonderful options I'd love to share with you. May I ask what the occasion is? We often have special packages for anniversaries, birthdays, and other celebrations!",
    sender: "staff",
    senderName: "John Doe",
    timestamp: "10:27 AM",
    status: "delivered" as const,
  },
];

const senderConfig = {
  user: {
    align: "right" as const,
    bgColor: "bg-emerald-500 text-white",
    icon: null,
  },
  ai: {
    align: "left" as const,
    bgColor: "bg-violet-500/10 text-foreground border border-violet-500/20",
    icon: Bot,
  },
  staff: {
    align: "left" as const,
    bgColor: "bg-card text-foreground border border-border",
    icon: UserCheck,
  },
};

type TypingUser = "user" | "ai" | null;
type ConversationStatus = "active" | "waiting" | "escalated" | "resolved";

const availableTags = [
  { id: "vip", label: "VIP", color: "bg-amber-500" },
  { id: "urgent", label: "Urgent", color: "bg-rose-500" },
  { id: "escalated", label: "Escalated", color: "bg-orange-500" },
  { id: "follow-up", label: "Follow-up", color: "bg-blue-500" },
  { id: "resolved", label: "Resolved", color: "bg-emerald-500" },
  { id: "pending", label: "Pending", color: "bg-slate-500" },
];

const statusConfig = {
  active: { label: "Active", color: "bg-emerald-500", textColor: "text-emerald-600" },
  waiting: { label: "Waiting", color: "bg-amber-500", textColor: "text-amber-600" },
  escalated: { label: "Escalated", color: "bg-orange-500", textColor: "text-orange-600" },
  resolved: { label: "Resolved", color: "bg-slate-500", textColor: "text-slate-600" },
};

export function ChatPanel() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [typingUser, setTypingUser] = useState<TypingUser>("user");
  const [isSending, setIsSending] = useState(false);
  const [hasTakenOver, setHasTakenOver] = useState(true);
  const [isUrgent, setIsUrgent] = useState(false);
  const [conversationStatus, setConversationStatus] = useState<ConversationStatus>("active");
  const [tags, setTags] = useState<string[]>(["vip"]);
  const [isTakingOver, setIsTakingOver] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle take over
  const handleTakeOver = async () => {
    if (hasTakenOver) {
      setHasTakenOver(false);
      toast.info("Returned to AI", {
        description: "AI Assistant is now handling this conversation.",
      });
    } else {
      setIsTakingOver(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsTakingOver(false);
      setHasTakenOver(true);
      toast.success("Chat taken over", {
        description: "You are now handling this conversation directly.",
      });
    }
  };

  // Handle mark urgent
  const handleMarkUrgent = () => {
    setIsUrgent(!isUrgent);
    if (!isUrgent) {
      setTags((prev) => (prev.includes("urgent") ? prev : [...prev, "urgent"]));
      toast.warning("Marked as urgent", {
        description: "This conversation has been flagged as urgent.",
      });
    } else {
      setTags((prev) => prev.filter((t) => t !== "urgent"));
      toast.info("Urgent flag removed");
    }
  };

  // Handle add tag
  const handleAddTag = (tagId: string) => {
    if (!tags.includes(tagId)) {
      setTags((prev) => [...prev, tagId]);
      const tag = availableTags.find((t) => t.id === tagId);
      toast.success(`Tag added: ${tag?.label}`);
    }
  };

  // Handle remove tag
  const handleRemoveTag = (tagId: string) => {
    setTags((prev) => prev.filter((t) => t !== tagId));
    if (tagId === "urgent") setIsUrgent(false);
  };

  // Handle status change
  const handleStatusChange = (status: ConversationStatus) => {
    setConversationStatus(status);
    toast.success(`Status changed to ${statusConfig[status].label}`);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingUser]);

  // Handle sending message
  const handleSend = useCallback(async () => {
    if (!message.trim() || isSending) return;

    setIsSending(true);
    const newMessage = {
      id: String(messages.length + 1),
      content: message.trim(),
      sender: "staff",
      senderName: "John Doe",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      status: "sent" as const,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setTypingUser(null);

    // Simulate message delivery
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === newMessage.id ? { ...m, status: "delivered" as const } : m
        )
      );
      setIsSending(false);

      // Simulate AI/user typing after a delay
      setTimeout(() => {
        setTypingUser("ai");
      }, 1000);
    }, 500);
  }, [message, messages.length, isSending]);

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Toggle typing indicator for demo
  const toggleTyping = () => {
    setTypingUser((prev) => {
      if (prev === null) return "user";
      if (prev === "user") return "ai";
      return null;
    });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-muted/30 to-background">
      {/* Chat Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        {/* Top Row - User info and controls */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage src="/avatars/sarah.jpg" alt="Sarah Johnson" />
                <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                  SJ
                </AvatarFallback>
              </Avatar>
              {isUrgent && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full bg-rose-500 flex items-center justify-center">
                  <AlertTriangle className="size-2.5 text-white" />
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-sm">Sarah Johnson</h2>
                {/* Status Dropdown */}
                <Select value={conversationStatus} onValueChange={(v) => handleStatusChange(v as ConversationStatus)}>
                  <SelectTrigger className="h-5 w-auto gap-1 border-none bg-transparent p-0 text-xs font-medium shadow-none focus:ring-0">
                    <span className={cn("size-2 rounded-full", statusConfig[conversationStatus].color)} />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">
                      <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        Active
                      </span>
                    </SelectItem>
                    <SelectItem value="waiting">
                      <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-500" />
                        Waiting
                      </span>
                    </SelectItem>
                    <SelectItem value="escalated">
                      <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-orange-500" />
                        Escalated
                      </span>
                    </SelectItem>
                    <SelectItem value="resolved">
                      <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-slate-500" />
                        Resolved
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {typingUser === "user" ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Typing...
                  </span>
                ) : (
                  <>
                    <span className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      Online
                    </span>
                    <span>•</span>
                    <span>Booking #RES-2024-78543</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Add Tag Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 text-xs border-amber-500/30 text-amber-600 hover:bg-amber-500/10 hover:text-amber-600"
                >
                  <Tag className="size-3.5" />
                  <span className="hidden sm:inline">Add Tag</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2" align="end">
                <p className="text-xs font-medium text-muted-foreground mb-2">Add a tag</p>
                <div className="space-y-1">
                  {availableTags
                    .filter((t) => !tags.includes(t.id))
                    .map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => handleAddTag(tag.id)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md hover:bg-muted transition-colors"
                      >
                        <span className={cn("size-2 rounded-full", tag.color)} />
                        {tag.label}
                      </button>
                    ))}
                  {availableTags.filter((t) => !tags.includes(t.id)).length === 0 && (
                    <p className="text-xs text-muted-foreground text-center py-2">All tags added</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>

            {/* Mark Urgent Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleMarkUrgent}
              className={cn(
                "h-8 gap-1.5 text-xs transition-all",
                isUrgent
                  ? "border-rose-500 bg-rose-500/10 text-rose-600 hover:bg-rose-500/20"
                  : "border-rose-500/30 text-rose-600 hover:bg-rose-500/10 hover:text-rose-600"
              )}
            >
              <AlertTriangle className={cn("size-3.5", isUrgent && "fill-rose-500")} />
              <span className="hidden sm:inline">{isUrgent ? "Urgent" : "Mark Urgent"}</span>
            </Button>

            {/* Take Over Button */}
            <Button
              variant={hasTakenOver ? "outline" : "default"}
              size="sm"
              onClick={handleTakeOver}
              disabled={isTakingOver}
              className={cn(
                "h-8 gap-1.5 text-xs transition-all",
                hasTakenOver
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"
                  : "bg-emerald-600 hover:bg-emerald-700"
              )}
            >
              {isTakingOver ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : hasTakenOver ? (
                <UserCheck className="size-3.5" />
              ) : (
                <Hand className="size-3.5" />
              )}
              <span className="hidden sm:inline">
                {isTakingOver ? "Taking over..." : hasTakenOver ? "Handling" : "Take Over"}
              </span>
            </Button>
          </div>
        </div>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex items-center gap-2 px-4 pb-3">
            <span className="text-xs text-muted-foreground">Tags:</span>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tagId) => {
                const tag = availableTags.find((t) => t.id === tagId);
                if (!tag) return null;
                return (
                  <span
                    key={tagId}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted"
                  >
                    <span className={cn("size-1.5 rounded-full", tag.color)} />
                    {tag.label}
                    <button
                      onClick={() => handleRemoveTag(tagId)}
                      className="ml-0.5 hover:text-rose-500 transition-colors"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Staff Takeover Indicator */}
        {hasTakenOver && (
          <div className="flex items-center gap-2 px-4 pb-2">
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
              <UserCheck className="size-3" />
              <span className="font-medium">You are handling this conversation</span>
            </div>
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => {
          const config = senderConfig[msg.sender as keyof typeof senderConfig];
          const Icon = config.icon;
          const isUser = msg.sender === "user";
          const isStaff = msg.sender === "staff";

          return (
            <div
              key={msg.id}
              className={cn(
                "flex gap-3 max-w-[80%]",
                (isUser || isStaff) && "ml-auto flex-row-reverse"
              )}
            >
              {!isUser && !isStaff && (
                <div className="shrink-0">
                  <div
                    className={cn(
                      "size-8 rounded-full flex items-center justify-center",
                      msg.sender === "ai"
                        ? "bg-gradient-to-br from-violet-500 to-purple-600"
                        : "bg-gradient-to-br from-emerald-500 to-teal-600"
                    )}
                  >
                    {Icon && <Icon className="size-4 text-white" />}
                  </div>
                </div>
              )}
              <div
                className={cn(
                  "space-y-1",
                  (isUser || isStaff) && "flex flex-col items-end"
                )}
              >
                <div
                  className={cn(
                    "flex items-center gap-2",
                    (isUser || isStaff) && "flex-row-reverse"
                  )}
                >
                  {!isUser && (
                    <span className="text-xs font-medium">{msg.senderName}</span>
                  )}
                  <span className="text-[10px] text-muted-foreground">
                    {msg.timestamp}
                  </span>
                </div>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    config.bgColor,
                    isUser || isStaff ? "rounded-tr-md" : "rounded-tl-md"
                  )}
                >
                  {msg.content}
                </div>
                {/* Message status for staff messages */}
                {isStaff && (msg as { status?: string }).status && (
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    {(msg as { status?: string }).status === "sent" && (
                      <>
                        <Check className="size-3" />
                        Sent
                      </>
                    )}
                    {(msg as { status?: string }).status === "delivered" && (
                      <>
                        <CheckCheck className="size-3 text-emerald-500" />
                        Delivered
                      </>
                    )}
                    {(msg as { status?: string }).status === "read" && (
                      <>
                        <CheckCheck className="size-3 text-blue-500" />
                        Read
                      </>
                    )}
                  </div>
                )}
                {(msg as { isEscalation?: boolean }).isEscalation && (
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                    <Hand className="size-3" />
                    Escalated to human agent
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {typingUser && (
          <div
            className={cn(
              "flex gap-3 max-w-[80%]",
              typingUser === "ai" ? "" : ""
            )}
          >
            <div
              className={cn(
                "size-8 rounded-full flex items-center justify-center",
                typingUser === "user"
                  ? "bg-gradient-to-br from-amber-500 to-orange-600"
                  : "bg-gradient-to-br from-violet-500 to-purple-600"
              )}
            >
              {typingUser === "user" ? (
                <span className="text-[10px] font-bold text-white">SJ</span>
              ) : (
                <Bot className="size-4 text-white" />
              )}
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium">
                {typingUser === "user" ? "Sarah Johnson" : "AI Assistant"}
              </span>
              <div
                className={cn(
                  "rounded-2xl rounded-tl-md px-4 py-3",
                  typingUser === "user"
                    ? "bg-muted"
                    : "bg-violet-500/10 border border-violet-500/20"
                )}
              >
                <div className="flex gap-1">
                  <span className="size-2 rounded-full bg-muted-foreground/50 animate-bounce" />
                  <span
                    className="size-2 rounded-full bg-muted-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <span
                    className="size-2 rounded-full bg-muted-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSending}
              className="min-h-[44px] max-h-32 resize-none pr-20 text-sm"
              rows={1}
            />
            <div className="absolute right-2 bottom-2 flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-foreground"
              >
                <Paperclip className="size-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-foreground"
              >
                <Smile className="size-4" />
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSend}
            disabled={!message.trim() || isSending}
            size="icon"
            className="size-11 shrink-0 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
          >
            <Send className="size-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <button
            type="button"
            onClick={toggleTyping}
            className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Toggle typing indicator (demo)
          </button>
          <p className="text-[10px] text-muted-foreground">
            Press{" "}
            <kbd className="px-1 py-0.5 rounded bg-muted text-[9px]">Enter</kbd>{" "}
            to send,{" "}
            <kbd className="px-1 py-0.5 rounded bg-muted text-[9px]">
              Shift + Enter
            </kbd>{" "}
            for new line
          </p>
        </div>
      </div>
    </div>
  );
}

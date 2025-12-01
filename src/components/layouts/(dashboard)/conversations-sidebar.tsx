"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bot,
  Filter,
  MessageSquare,
  Search,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

// Dummy conversation data
const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    lastMessage: "I need help with my hotel booking...",
    time: "2m ago",
    unread: 3,
    status: "active" as const,
    isAiHandling: false,
  },
  {
    id: "2",
    name: "Mike Chen",
    avatar: "/avatars/mike.jpg",
    lastMessage: "The AI suggested I contact support",
    time: "5m ago",
    unread: 1,
    status: "escalated" as const,
    isAiHandling: false,
  },
  {
    id: "3",
    name: "Emily Davis",
    avatar: "/avatars/emily.jpg",
    lastMessage: "Thank you for your help!",
    time: "12m ago",
    unread: 0,
    status: "active" as const,
    isAiHandling: true,
  },
  {
    id: "4",
    name: "James Wilson",
    avatar: "/avatars/james.jpg",
    lastMessage: "Can I change my reservation date?",
    time: "18m ago",
    unread: 0,
    status: "waiting" as const,
    isAiHandling: true,
  },
  {
    id: "5",
    name: "Lisa Anderson",
    avatar: "/avatars/lisa.jpg",
    lastMessage: "This is urgent! Please help ASAP",
    time: "25m ago",
    unread: 5,
    status: "urgent" as const,
    isAiHandling: false,
  },
  {
    id: "6",
    name: "Robert Taylor",
    avatar: "/avatars/robert.jpg",
    lastMessage: "I have a question about amenities",
    time: "1h ago",
    unread: 0,
    status: "active" as const,
    isAiHandling: true,
  },
];

const statusConfig = {
  active: {
    label: "Active",
    color: "bg-emerald-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  waiting: {
    label: "Waiting",
    color: "bg-amber-500",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  escalated: {
    label: "Escalated",
    color: "bg-rose-500",
    textColor: "text-rose-600 dark:text-rose-400",
  },
  urgent: {
    label: "Urgent",
    color: "bg-rose-500 animate-pulse",
    textColor: "text-rose-600 dark:text-rose-400",
  },
};

export function ConversationsSidebar() {
  const [selectedId, setSelectedId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredConversations = conversations
    .filter((conv) => {
      const matchesSearch = conv.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === "all" ||
        (filter === "urgent" && conv.status === "urgent") ||
        (filter === "escalated" && conv.status === "escalated") ||
        (filter === "waiting" && conv.status === "waiting") ||
        (filter === "active" && conv.status === "active") ||
        (filter === "ai" && conv.isAiHandling) ||
        (filter === "taken-over" && !conv.isAiHandling);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // Sort by unread count first, then by time (most recent first)
      if (a.unread !== b.unread) return b.unread - a.unread;
      return 0; // Keep original order for same unread count
    });

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="border-r border-sidebar-border"
    >
      <SidebarHeader className="border-b border-sidebar-border pb-4 group-data-[collapsible=icon]:pb-2">
        <div className="flex items-center gap-2 px-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <MessageSquare className="size-5 text-emerald-500 shrink-0" />
          <span className="font-semibold text-sm group-data-[collapsible=icon]:hidden">
            Conversations
          </span>
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-muted group-data-[collapsible=icon]:hidden">
            {conversations.length}
          </span>
        </div>
        <div className="space-y-2 group-data-[collapsible=icon]:hidden">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-8 text-sm bg-sidebar-accent/50"
            />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="h-8 text-xs">
              <Filter className="size-3 mr-2" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Conversations</SelectItem>
              <SelectItem value="urgent">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-500" />
                  Urgent
                </span>
              </SelectItem>
              <SelectItem value="escalated">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-500" />
                  Escalated
                </span>
              </SelectItem>
              <SelectItem value="waiting">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-amber-500" />
                  Waiting
                </span>
              </SelectItem>
              <SelectItem value="active">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Active
                </span>
              </SelectItem>
              <SelectItem value="ai">AI Handling</SelectItem>
              <SelectItem value="taken-over">Taken Over (Human)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:px-0">
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground group-data-[collapsible=icon]:sr-only">
            Active Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredConversations.map((conversation) => (
                <SidebarMenuItem key={conversation.id} className="relative">
                  <SidebarMenuButton
                    isActive={selectedId === conversation.id}
                    onClick={() => setSelectedId(conversation.id)}
                    className="h-auto py-3 px-2 group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-1 group-data-[collapsible=icon]:justify-center"
                    tooltip={conversation.name}
                  >
                    <div className="relative shrink-0">
                      <Avatar className="size-9 group-data-[collapsible=icon]:size-8">
                        <AvatarImage
                          src={conversation.avatar}
                          alt={conversation.name}
                        />
                        <AvatarFallback className="text-xs bg-gradient-to-br from-slate-600 to-slate-700 text-white">
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          "absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-sidebar group-data-[collapsible=icon]:size-2.5 group-data-[collapsible=icon]:border",
                          statusConfig[conversation.status].color
                        )}
                      />
                      {/* Unread badge - visible only when collapsed */}
                      {conversation.unread > 0 && (
                        <span className="absolute -top-1 -right-1 size-4 min-w-4 rounded-full bg-emerald-500 text-white text-[10px] font-bold items-center justify-center hidden group-data-[collapsible=icon]:flex">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-sm truncate">
                          {conversation.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground shrink-0">
                          {conversation.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {conversation.isAiHandling ? (
                          <Bot className="size-3 text-violet-500 shrink-0" />
                        ) : (
                          <UserCheck className="size-3 text-emerald-500 shrink-0" />
                        )}
                        <p className="text-xs text-muted-foreground truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {conversation.status === "urgent" && (
                          <span className="flex items-center gap-1 text-[10px] font-medium text-rose-500">
                            <AlertTriangle className="size-3" />
                            Urgent
                          </span>
                        )}
                        {conversation.status === "escalated" && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-500">
                            Escalated
                          </span>
                        )}
                        {conversation.status === "waiting" && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                            Waiting
                          </span>
                        )}
                        {conversation.status === "active" && !conversation.isAiHandling && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </SidebarMenuButton>
                  {/* Unread badge - visible only when expanded */}
                  {conversation.unread > 0 && (
                    <SidebarMenuBadge className="bg-emerald-500 text-white text-[10px] font-bold group-data-[collapsible=icon]:hidden">
                      {conversation.unread}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border group-data-[collapsible=icon]:hidden">
        <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
          <span>
            {conversations.filter((c) => c.isAiHandling).length} AI Handled
          </span>
          <span>
            {conversations.filter((c) => !c.isAiHandling).length} Human Handled
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}


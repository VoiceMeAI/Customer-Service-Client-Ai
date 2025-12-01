"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bell,
  Check,
  CheckCheck,
  ChevronDown,
  Hand,
  Headphones,
  LogOut,
  MessageSquare,
  Moon,
  Settings,
  Sun,
  Trash2,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Dummy notifications data
const initialNotifications = [
  {
    id: "1",
    type: "escalation" as const,
    title: "Chat Escalated",
    message: "Lisa Anderson's chat has been escalated and requires attention.",
    time: "2 min ago",
    read: false,
    customerName: "Lisa Anderson",
  },
  {
    id: "2",
    type: "new_chat" as const,
    title: "New Chat Assigned",
    message: "You have a new chat from Mike Chen.",
    time: "5 min ago",
    read: false,
    customerName: "Mike Chen",
  },
  {
    id: "3",
    type: "urgent" as const,
    title: "Urgent Message",
    message: "Sarah Johnson marked her conversation as urgent.",
    time: "10 min ago",
    read: false,
    customerName: "Sarah Johnson",
  },
  {
    id: "4",
    type: "new_chat" as const,
    title: "New Chat Assigned",
    message: "You have a new chat from Emily Davis.",
    time: "15 min ago",
    read: true,
    customerName: "Emily Davis",
  },
  {
    id: "5",
    type: "resolved" as const,
    title: "Chat Resolved",
    message: "James Wilson's issue has been marked as resolved.",
    time: "1 hour ago",
    read: true,
    customerName: "James Wilson",
  },
];

const notificationConfig = {
  escalation: {
    icon: Hand,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  new_chat: {
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  urgent: {
    icon: AlertTriangle,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  resolved: {
    icon: CheckCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
};

export function DashboardHeader() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showEscalationBanner, setShowEscalationBanner] = useState(true);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const escalations = notifications.filter(
    (n) => n.type === "escalation" && !n.read
  );

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    toast.success("All notifications marked as read");
  };

  const handleClearAll = () => {
    setNotifications([]);
    toast.success("All notifications cleared");
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Demo function to trigger notifications
  const triggerDemoNotification = (type: "chat" | "escalation" | "urgent") => {
    if (type === "chat") {
      toast("New Chat Assigned", {
        description: "You have a new chat from Demo Customer.",
        icon: <MessageSquare className="size-4 text-blue-500" />,
        action: {
          label: "View",
          onClick: () => console.log("View chat"),
        },
      });
    } else if (type === "escalation") {
      toast.warning("Chat Escalated!", {
        description: "A conversation requires your immediate attention.",
        duration: 10000,
      });
    } else if (type === "urgent") {
      toast.error("Urgent Message!", {
        description: "Customer has marked their message as urgent.",
        duration: 10000,
      });
    }
  };

  return (
    <>
      {/* Escalation Alert Banner */}
      {showEscalationBanner && escalations.length > 0 && (
        <div className="bg-orange-500/10 border-b border-orange-500/20 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Hand className="size-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-orange-700 dark:text-orange-400">
                  {escalations.length} Escalated{" "}
                  {escalations.length === 1 ? "Chat" : "Chats"} Require Attention
                </p>
                <p className="text-xs text-orange-600/80 dark:text-orange-400/80">
                  {escalations.map((e) => e.customerName).join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs border-orange-500/30 text-orange-600 hover:bg-orange-500/10"
                onClick={() => {
                  toast.info("Viewing escalated chats...");
                }}
              >
                View All
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-7 text-orange-600 hover:bg-orange-500/20"
                onClick={() => setShowEscalationBanner(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-20">
        <div className="flex h-14 items-center gap-4 px-4">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Headphones className="size-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold tracking-tight">
                  Agent Dashboard
                </h1>
                <p className="text-xs text-muted-foreground">
                  Customer Support Portal
                </p>
              </div>
            </div>
          </div>

          {/* Center Section - Status */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Online • 3 Active Chats
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Demo Notification Triggers */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 text-xs gap-1.5 hidden lg:flex">
                  <Bell className="size-3.5" />
                  Demo
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-xs">Trigger Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => triggerDemoNotification("chat")}>
                  <MessageSquare className="size-4 mr-2 text-blue-500" />
                  New Chat
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => triggerDemoNotification("escalation")}>
                  <Hand className="size-4 mr-2 text-orange-500" />
                  Escalation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => triggerDemoNotification("urgent")}>
                  <AlertTriangle className="size-4 mr-2 text-rose-500" />
                  Urgent
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sound Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "size-8",
                !soundEnabled && "text-muted-foreground"
              )}
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                toast(soundEnabled ? "Sound disabled" : "Sound enabled", {
                  icon: soundEnabled ? (
                    <VolumeX className="size-4" />
                  ) : (
                    <Volume2 className="size-4" />
                  ),
                });
              }}
            >
              {soundEnabled ? (
                <Volume2 className="size-4" />
              ) : (
                <VolumeX className="size-4" />
              )}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => {
                setIsDark(!isDark);
                document.documentElement.classList.toggle("dark");
              }}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>

            {/* Notifications Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8 relative">
                  <Bell className="size-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">Notifications</h4>
                    {unreadCount > 0 && (
                      <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={handleMarkAllAsRead}
                      >
                        <Check className="size-3 mr-1" />
                        Mark all read
                      </Button>
                    )}
                  </div>
                </div>

                {/* Notification List */}
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                      <Bell className="size-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No notifications</p>
                    </div>
                  ) : (
                    notifications.map((notification) => {
                      const config = notificationConfig[notification.type];
                      const Icon = config.icon;
                      return (
                        <div
                          key={notification.id}
                          className={cn(
                            "flex gap-3 p-3 border-b last:border-b-0 hover:bg-muted/50 transition-colors cursor-pointer group",
                            !notification.read && "bg-muted/30"
                          )}
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          <div
                            className={cn(
                              "size-9 rounded-full flex items-center justify-center shrink-0",
                              config.bgColor
                            )}
                          >
                            <Icon className={cn("size-4", config.color)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p
                                className={cn(
                                  "text-sm truncate",
                                  !notification.read && "font-medium"
                                )}
                              >
                                {notification.title}
                              </p>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteNotification(notification.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="size-3.5 text-muted-foreground hover:text-rose-500" />
                              </button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                          {!notification.read && (
                            <span className="size-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Footer */}
                {notifications.length > 0 && (
                  <div className="p-2 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full h-8 text-xs text-muted-foreground"
                      onClick={handleClearAll}
                    >
                      <Trash2 className="size-3 mr-1.5" />
                      Clear all notifications
                    </Button>
                  </div>
                )}
              </PopoverContent>
            </Popover>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 pl-2 pr-1 h-9">
                  <Avatar className="size-6">
                    <AvatarImage src="/avatars/agent.jpg" alt="Agent" />
                    <AvatarFallback className="text-xs bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm font-medium">
                    John Doe
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="size-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sound Notifications</span>
                    <Switch
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                    />
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600 focus:text-rose-600">
                  <LogOut className="size-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Bot,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Edit3,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Pencil,
  Phone,
  RefreshCw,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Dummy customer data
const customerData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  memberSince: "March 2022",
  loyaltyTier: "Gold",
  totalBookings: 12,
  history: [
    {
      id: "1",
      type: "booking",
      title: "Deluxe Room - Downtown",
      date: "Nov 15, 2024",
      status: "completed",
    },
    {
      id: "2",
      type: "support",
      title: "Billing inquiry",
      date: "Nov 10, 2024",
      status: "resolved",
    },
    {
      id: "3",
      type: "booking",
      title: "Suite - Airport Location",
      date: "Oct 22, 2024",
      status: "completed",
    },
    {
      id: "4",
      type: "support",
      title: "Room upgrade request",
      date: "Oct 20, 2024",
      status: "resolved",
    },
  ],
};

// Dummy AI suggestion
const aiSuggestion = {
  content:
    "I'd be happy to share our suite options with you! For December 20-23, we have two beautiful suites available:\n\n1. **Executive Suite** ($289/night) - 650 sq ft with city views, king bed, and separate living area\n\n2. **Presidential Suite** ($449/night) - 1,100 sq ft with panoramic views, jacuzzi tub, and complimentary breakfast\n\nSince you mentioned it's a special occasion, I'd recommend our Anniversary Package which includes champagne, chocolate-covered strawberries, and late checkout. Would you like details on either suite?",
  confidence: 94,
  isGenerating: false,
};

export function InfoPanel() {
  const [notes, setNotes] = useState(
    "VIP customer - always accommodate requests when possible. Prefers high floors."
  );
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [editedSuggestion, setEditedSuggestion] = useState(aiSuggestion.content);
  const [isEditingSuggestion, setIsEditingSuggestion] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleRegenerate = async () => {
    setIsGenerating(true);
    // Simulate AI regeneration
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setEditedSuggestion(aiSuggestion.content);
    setIsGenerating(false);
    toast.success("New suggestion generated", {
      description: "AI has created a new response based on the conversation.",
    });
  };

  const handleApprove = async () => {
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSending(false);
    toast.success("Message sent!", {
      description: "Your response has been sent to the customer.",
    });
  };

  const handleReject = () => {
    toast.info("Suggestion rejected", {
      description: "AI will learn from this feedback.",
    });
    handleRegenerate();
  };

  return (
    <aside className="w-80 border-l border-border bg-background hidden lg:flex flex-col overflow-hidden">
      <Tabs defaultValue="ai" className="flex flex-col h-full">
        <TabsList className="grid w-full grid-cols-2 rounded-none border-b h-12 bg-transparent p-0">
          <TabsTrigger
            value="ai"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none h-full"
          >
            <Sparkles className="size-4 mr-1.5 text-violet-500" />
            AI Assist
          </TabsTrigger>
          <TabsTrigger
            value="customer"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none h-full"
          >
            <User className="size-4 mr-1.5 text-emerald-500" />
            Customer
          </TabsTrigger>
        </TabsList>

        {/* AI Assist Tab */}
        <TabsContent value="ai" className="flex-1 overflow-y-auto m-0 p-4">
          <div className="space-y-4">
            {/* AI Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  {isGenerating ? (
                    <Loader2 className="size-4 text-white animate-spin" />
                  ) : (
                    <Bot className="size-4 text-white" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">
                    {isGenerating ? "Generating response..." : "Ready to assist"}
                  </p>
                </div>
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                isGenerating 
                  ? "text-amber-600 bg-amber-500/10" 
                  : "text-emerald-600 bg-emerald-500/10"
              }`}>
                <span className={`size-1.5 rounded-full animate-pulse ${
                  isGenerating ? "bg-amber-500" : "bg-emerald-500"
                }`} />
                {isGenerating ? "Thinking..." : "Active"}
              </div>
            </div>

            <Separator />

            {/* Suggested Response */}
            <Card className="border-violet-500/20 bg-violet-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4 text-violet-500" />
                    Suggested Response
                  </span>
                  <div className="flex items-center gap-2">
                    {!isGenerating && (
                      <span className="text-xs font-normal text-muted-foreground">
                        {aiSuggestion.confidence}% confidence
                      </span>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0"
                      onClick={handleRegenerate}
                      disabled={isGenerating || isSending}
                    >
                      <RefreshCw className={`size-3 ${isGenerating ? "animate-spin" : ""}`} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isGenerating ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[70%]" />
                    <Skeleton className="h-4 w-[85%]" />
                  </div>
                ) : isEditingSuggestion ? (
                  <Textarea
                    value={editedSuggestion}
                    onChange={(e) => setEditedSuggestion(e.target.value)}
                    className="text-sm min-h-[150px] resize-none"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {editedSuggestion}
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  {isEditingSuggestion ? (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 h-8 text-xs"
                        onClick={() => {
                          setEditedSuggestion(aiSuggestion.content);
                          setIsEditingSuggestion(false);
                        }}
                      >
                        <X className="size-3 mr-1" />
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 h-8 text-xs bg-emerald-600 hover:bg-emerald-700"
                        disabled={isSending}
                        onClick={async () => {
                          setIsEditingSuggestion(false);
                          await handleApprove();
                        }}
                      >
                        {isSending ? (
                          <Loader2 className="size-3 mr-1 animate-spin" />
                        ) : (
                          <Check className="size-3 mr-1" />
                        )}
                        Save & Send
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-8 text-xs text-rose-600 border-rose-500/30 hover:bg-rose-500/10"
                          onClick={handleReject}
                          disabled={isGenerating || isSending}
                        >
                          <X className="size-3 mr-1" />
                          Reject
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-8 text-xs"
                          onClick={() => setIsEditingSuggestion(true)}
                          disabled={isGenerating || isSending}
                        >
                          <Edit3 className="size-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        className="w-full h-8 text-xs bg-emerald-600 hover:bg-emerald-700"
                        onClick={handleApprove}
                        disabled={isGenerating || isSending}
                      >
                        {isSending ? (
                          <Loader2 className="size-3 mr-1 animate-spin" />
                        ) : (
                          <Check className="size-3 mr-1" />
                        )}
                        Approve & Send
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Context Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Detected Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Intent</span>
                  <span className="font-medium">Room Upgrade Request</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sentiment</span>
                  <span className="font-medium text-emerald-600">Positive</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Priority</span>
                  <span className="font-medium text-amber-600">Medium</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Customer Tab */}
        <TabsContent value="customer" className="flex-1 overflow-y-auto m-0 p-4">
          <div className="space-y-4">
            {/* Customer Header */}
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage src="/avatars/sarah.jpg" alt={customerData.name} />
                <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white text-lg">
                  SJ
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{customerData.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-amber-600">
                  <Star className="size-3 fill-current" />
                  {customerData.loyaltyTier} Member
                </div>
              </div>
            </div>

            <Separator />

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contact Information
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(customerData.email);
                    toast.success("Email copied to clipboard");
                  }}
                  className="flex items-center gap-2 text-sm w-full hover:bg-muted/50 p-1.5 -ml-1.5 rounded-md transition-colors group"
                >
                  <Mail className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {customerData.email}
                  </span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(customerData.phone);
                    toast.success("Phone copied to clipboard");
                  }}
                  className="flex items-center gap-2 text-sm w-full hover:bg-muted/50 p-1.5 -ml-1.5 rounded-md transition-colors group"
                >
                  <Phone className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {customerData.phone}
                  </span>
                </button>
                <div className="flex items-center gap-2 text-sm p-1.5 -ml-1.5">
                  <MapPin className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {customerData.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm p-1.5 -ml-1.5">
                  <Calendar className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Member since {customerData.memberSince}
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Quick Actions */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-xs justify-start"
                  onClick={() => toast.info("Opening booking system...")}
                >
                  <Calendar className="size-3.5 mr-2" />
                  New Booking
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-xs justify-start"
                  onClick={() => {
                    window.location.href = `mailto:${customerData.email}`;
                  }}
                >
                  <Mail className="size-3.5 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-xs justify-start"
                  onClick={() => toast.info("Opening refund form...")}
                >
                  <ExternalLink className="size-3.5 mr-2" />
                  Issue Refund
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-xs justify-start"
                  onClick={() => toast.info("Opening upgrade options...")}
                >
                  <Star className="size-3.5 mr-2" />
                  Upgrade Tier
                </Button>
              </div>
            </div>

            <Separator />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-muted/50 text-center">
                <p className="text-2xl font-bold text-emerald-600">
                  {customerData.totalBookings}
                </p>
                <p className="text-xs text-muted-foreground">Total Bookings</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 text-center">
                <p className="text-2xl font-bold text-violet-600">4.9</p>
                <p className="text-xs text-muted-foreground">Avg Rating</p>
              </div>
            </div>

            <Separator />

            {/* Agent Notes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Agent Notes
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsEditingNotes(!isEditingNotes)}
                >
                  <Pencil className="size-3" />
                </Button>
              </div>
              {isEditingNotes ? (
                <div className="space-y-2">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="text-sm min-h-[80px] resize-none"
                    placeholder="Add notes about this customer..."
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                      onClick={() => setIsEditingNotes(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => {
                        setIsEditingNotes(false);
                        toast.success("Notes saved", {
                          description: "Customer notes have been updated.",
                        });
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded-md">
                  {notes || "No notes yet. Click the pencil to add notes."}
                </p>
              )}
            </div>

            <Separator />

            {/* History */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Recent History
                </h4>
                <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                  View All
                  <ExternalLink className="size-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-2">
                {customerData.history.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div
                      className={`size-8 rounded-full flex items-center justify-center ${
                        item.type === "booking"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-violet-500/10 text-violet-600"
                      }`}
                    >
                      {item.type === "booking" ? (
                        <Calendar className="size-4" />
                      ) : (
                        <MessageSquare className="size-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {item.date}
                      </div>
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </aside>
  );
}


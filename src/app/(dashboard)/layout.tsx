"use client";

import { DashboardHeader } from "@/components/layouts/(dashboard)/dashboard-header";
import { ConversationsSidebar } from "@/components/layouts/(dashboard)/conversations-sidebar";
import { InfoPanel } from "@/components/layouts/(dashboard)/info-panel";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <ConversationsSidebar />
      <SidebarInset className="flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-hidden">{children}</main>
          {/* Right Info Panel */}
          <InfoPanel />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


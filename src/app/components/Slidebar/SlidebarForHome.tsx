"use client";

import React from "react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarGroup,
} from "../ui/sidebar";

export function SlidebarForHome() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="bg-red-500 mb-2">
          <SidebarContent>
            <SidebarGroup>Header hai yeh</SidebarGroup>
          </SidebarContent>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="bg-blue-200">Home</SidebarGroup>
          <SidebarGroup className="bg-green-300">Favorite</SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-gray-500 text-white">Rajan</SidebarFooter>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  );
}

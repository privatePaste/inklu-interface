import { Outlet } from "react-router-dom"

import { AdminSidebar } from "../src/components/Sidebar"
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar"



export function AdminLayout() {
  return (
    <SidebarProvider defaultOpen>
      <AdminSidebar />

      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

import { NavLink } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible"

import {
  ChevronDown,
  LayoutDashboard,
  Store,
  Plus,
  List,
  Edit,
  Trash2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../../components/ui/sidebar"

export function AdminSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>

        {/* LOGO */}
        <div className="px-4 py-6 text-xl font-bold tracking-tight">
          Inklu Admin
        </div>

        {/* ===== GERAL ===== */}
        <SidebarGroup>
          <SidebarGroupLabel>Geral</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "hover:bg-sidebar-accent/50",
                    ].join(" ")
                  }
                >
                  <LayoutDashboard className="size-4" />
                  <span>Dashboard</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* ===== GESTÃO ===== */}
        <SidebarGroup>
          <SidebarGroupLabel>Gestão</SidebarGroupLabel>

          <Collapsible defaultOpen>
            <SidebarMenu>
              <SidebarMenuItem>

                {/* MENU PAI */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="hover:bg-sidebar-accent/50">
                    <Store className="size-4" />
                    <span>Estabelecimentos</span>
                    <ChevronDown className="ml-auto size-4 opacity-70" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {/* SUBMENU */}
                <CollapsibleContent>
                  <div className="ml-6 mt-2 space-y-1 border-l border-sidebar-border pl-3">

                    <NavLink
                      to="/admin/estabelecimentos/create"
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "hover:bg-sidebar-accent/50",
                        ].join(" ")
                      }
                    >
                      <Plus size={14} />
                      Criar
                    </NavLink>

                    <NavLink
                      to="/admin/estabelecimentos/read"
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "hover:bg-sidebar-accent/50",
                        ].join(" ")
                      }
                    >
                      <List size={14} />
                      Listar
                    </NavLink>

                    <NavLink
                      to="/admin/estabelecimentos/update"
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "hover:bg-sidebar-accent/50",
                        ].join(" ")
                      }
                    >
                      <Edit size={14} />
                      Editar
                    </NavLink>

                    <NavLink
                      to="/admin/estabelecimentos/delete"
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-destructive/15 text-destructive font-medium"
                            : "hover:bg-destructive/10 text-red-500",
                        ].join(" ")
                      }
                    >
                      <Trash2 size={14} />
                      Remover
                    </NavLink>

                  </div>
                </CollapsibleContent>

              </SidebarMenuItem>
            </SidebarMenu>
          </Collapsible>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}

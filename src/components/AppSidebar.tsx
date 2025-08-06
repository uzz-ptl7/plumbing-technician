import { Home, Wrench, Phone, Info, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Services", url: "#services", icon: Wrench },
  { title: "About", url: "#about", icon: Info },
  { title: "Contact", url: "#contact", icon: Phone },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { setOpenMobile } = useSidebar();

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className="md:hidden">
      <SidebarHeader className="flex flex-row items-center justify-between p-4 border-b">
        <span className="font-semibold">Menu</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setOpenMobile(false)}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Emergency contact in sidebar */}
        <SidebarGroup>
          <SidebarGroupLabel>Emergency Contact</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-4 bg-emergency/10 rounded-lg">
              <div className="text-sm font-medium text-emergency mb-2">
                24/7 Emergency Service
              </div>
              <div className="text-lg font-bold text-emergency">
                +250 788 123 456
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
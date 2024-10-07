"use client";

import Link from "next/link";
import {
  BarChart2,
  Home,
  MessageSquare,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Sidebar() {
  const [active, setActive] = useState("/admin"); // Track the active route

  const handleActive = (path) => {
    setActive(path); // Update active button based on the clicked path
  };

  // Define the menu items in an array
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
    { name: "Orders", href: "/orders", icon: ShoppingCart },
    { name: "Products", href: "/admin/product", icon: Package },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Messages", href: "/messages", icon: MessageSquare },
  ];

  return (
    <div className="flex h-full w-64 flex-col bg-white p-4 shadow-lg">
      <div className="mb-4 flex gap-2 items-center">
        <Link href="http://localhost:3000/">
          <img className="w-10 h-10" src="../ice-berg.png" alt="FrozeUP logo" />
        </Link>
        <h1 className="text-2xl font-bold">
          <Link className="text-black" href="http://localhost:3000/">
            FrozeUP
          </Link>
        </h1>
      </div>

      <h1 className="px-4 mb-2 text-gray-400">Main Menu</h1>
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant={active === item.href ? "destructive" : "secondary"} // Set variant to "ghost" if active
            className="w-full justify-start"
            onClick={() => handleActive(item.href)}
            asChild
          >
            <Link href={item.href} className="flex items-center space-x-2">
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          </Button>
        ))}
      </nav>
      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-sm font-medium">Demo Mode</span>
        <Switch />
      </div>
    </div>
  );
}

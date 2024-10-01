'use client'

import Link from "next/link"
import { BarChart2, Home, MessageSquare, Package, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function Sidebar() {
  return (
    (<div className="flex h-screen w-64 flex-col bg-white p-4 shadow-lg">
      <div className="mb-4 flex gap-2 items-center">
        <img className="w-10 h-10" src="ice-berg.png"/>
        <h1 className="font-bold text-xl">FrozeUP</h1>
      </div>
      <h1 className="px-4 mb-2 text-gray-400 ">Main Menu</h1>
      <nav className="flex-1 space-y-2">
        <Button variant="" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <BarChart2 className="h-4 w-4" />
            <span>Analytics</span>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Orders</span>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <Package className="h-4 w-4" />
            <span>Products</span>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Customers</span>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="#" className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4" />
            <span>Messages</span>
          </Link>
        </Button>
      </nav>
      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-sm font-medium">Demo Mode</span>
        <Switch />
      </div>
    </div>)
  );
}
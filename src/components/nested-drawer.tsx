"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Cloud,
  Users,
  Zap,
  Shield,
  BarChart3,
  Settings,
  Wrench,
  Database,
  TrendingUp,
  PieChart,
} from "lucide-react";

interface MenuItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface MenuData {
  title: string;
  items: MenuItem[];
}

interface NestedDrawerProps {
  menuData: MenuData;
}

export const NestedDrawer: React.FC<NestedDrawerProps> = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<MenuItem[][]>([
    menuData.items,
  ]);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItems = navigationStack[navigationStack.length - 1];
  const canGoBack = navigationStack.length > 1;

  const handleItemClick = (item: MenuItem) => {
    if (item.items && item.items.length > 0) {
      setDirection("forward");
      setIsAnimating(true);
      setTimeout(() => {
        setNavigationStack([...navigationStack, item.items!]);
        setIsAnimating(false);
      }, 150);
    }
  };

  const handleBack = () => {
    if (canGoBack) {
      setDirection("backward");
      setIsAnimating(true);
      setTimeout(() => {
        setNavigationStack(navigationStack.slice(0, -1));
        setIsAnimating(false);
      }, 150);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setNavigationStack([menuData.items]);
      }, 300);
    }
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Drawer.Trigger asChild>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
          aria-label="Open menu"
        >
          Open Menu
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-3xl mt-24 fixed bottom-0 left-0 right-0 z-50 outline-none">
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          <Drawer.Title className="sr-only">Menu Navigation</Drawer.Title>

          <div className="flex items-center px-4 py-3">
            {canGoBack && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 px-2 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </button>
            )}
          </div>

          <div className="overflow-y-auto px-4 py-2 flex-1">
            <div
              className={`transition-all duration-200 ${
                isAnimating
                  ? direction === "forward"
                    ? "opacity-0 translate-x-4"
                    : "opacity-0 -translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <nav role="navigation" aria-label="Menu items">
                <ul className="space-y-1 pb-4">
                  {currentItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleItemClick(item)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group flex items-start gap-3"
                        aria-haspopup={item.items ? "true" : undefined}
                      >
                        {item.icon && (
                          <span
                            className="text-gray-700 mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 text-sm">
                              {item.title}
                            </span>
                            {item.items && item.items.length > 0 && (
                              <ChevronRight
                                size={16}
                                className="text-gray-400 group-hover:text-gray-600 shrink-0"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

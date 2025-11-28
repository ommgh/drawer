

# Nested Drawer Navigation

A high-performance, accessible, and animated drawer component featuring iOS-style nested navigation, auto-height adjustment, and "depth" transitions. Built with **React**, **Framer Motion**, and **Vaul**.

##  Features

  * **Recursive Nesting:** Supports infinite levels of sub-menus.
  * **Auto-Height:** The drawer smoothly resizes based on the content of the active menu.
  * **Depth Transitions:** Uses scale and blur effects for a premium "drill-down" feel.
  * **Keyboard Accessible:** Full focus management and keyboard navigation support.
  * **Mobile Optimized:** Touch gestures and responsive layout.

##  Installation

### 1\. Prerequisites

Ensure you have the following shadcn/ui components installed:

```bash
bunx shadcn@latest add button

```bash
bun install vaul
```

### 2\. Install Dependencies

Install the required animation:

```bash
bun install framer-motion
```

## 📦 Data Structure

The component relies on a recursive data structure. You must strictly follow this TypeScript interface:

```typescript
// The individual menu item
interface MenuItem {
  id: string;
  title: string;           // Display text
  description?: string;    // Optional subtitle/helper text
  icon?: React.ReactNode;  // Lucide icon component
  items?: MenuItem[];      // Recursive array for sub-menus
}

// The root object passed to the component
interface MenuData {
  title: string;           // Title of the root menu (e.g., "Main Menu")
  items: MenuItem[];
}
```

## Usage

Here is a complete example of how to implement the drawer in your page or layout.

```tsx
"use client";

import { NestedDrawer } from "@/components/nested-drawer";
import { Home, Settings, User } from "lucide-react";

const data = {
  title: "Main Menu",
  items: [
    {
      id: "home",
      title: "Home",
      description: "Go back to dashboard",
      icon: <Home size={20} />,
    },
    {
      id: "settings",
      title: "Settings",
      description: "Account preferences",
      icon: <Settings size={20} />,
      items: [
         // Nested Item
        {
          id: "profile",
          title: "Profile",
          icon: <User size={20} />,
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
       {/* Pass the data object to the component */}
       <NestedDrawer menuData={data} />
    </div>
  );
}
```

## ⚙️ Component API

| Prop | Type | Description |
| :--- | :--- | :--- |
| `menuData` | `MenuData` | **Required.** The root object containing the menu tree. |
| `open` | `boolean` | (Optional) Control the open state externally. |
| `onOpenChange` | `(open: boolean) => void` | (Optional) Callback when state changes. |

## 🎨 Customization

### Adjusting Animation Speed

To change the speed of the "depth" transition, navigate to the `motion.div` inside the component and modify the `transition` prop:

```tsx
// Faster (Snappy)
transition={{ duration: 0.2, ease: "easeInOut" }}

// Slower (Cinematic/iOS feel)
transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
```

### Adjusting Height Animation

If you want the drawer to resize faster or slower, find the wrapper `motion.div` (handling height) and adjust the spring physics:

```tsx
// Bouncy/Springy
transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}

// Stiff/Solid
transition={{ type: "spring", bounce: 0, duration: 0.3 }}
```

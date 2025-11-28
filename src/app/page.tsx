"use client";

import {
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
  Home,
} from "lucide-react";
import { NestedDrawer } from "@/components/nested-drawer";

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

const sampleMenuData: MenuData = {
  title: "Services",
  items: [
    {
      id: "home",
      title: "Home",
      description: "Scalable cloud solutions and infrastructure",
      icon: <Home size={20} />,
    },
    {
      id: "software",
      title: "Software Solutions",
      description: "Custom software development and deployment",
      icon: <Code size={20} />,
      items: [
        {
          id: "web",
          title: "Web Development",
          description: "Modern web applications",
          icon: <Code size={20} />,
          items: [
            {
              id: "mobile",
              title: "Mobile Development",
              description: "iOS and Android apps",
              icon: <Code size={20} />,
            },
          ],
        },
        {
          id: "mobile",
          title: "Mobile Development",
          description: "iOS and Android apps",
          icon: <Code size={20} />,
        },
      ],
    },

    {
      id: "consulting",
      title: "Consulting Services",
      description: "Expert guidance and strategic support",
      icon: <Users size={20} />,
    },
    {
      id: "digital",
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies",
      icon: <Zap size={20} />,
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Consulting",
      description: "Comprehensive cybersecurity services and solutions",
      icon: <Shield size={20} />,
    },
    {
      id: "data",
      title: "Data & Analytics Consulting",
      description: "Data strategy, analytics, and business intelligence",
      icon: <BarChart3 size={20} />,
      items: [
        {
          id: "data-strategy",
          title: "Data Strategy",
          description: "Data governance and strategy development",
          icon: <Database size={20} />,
        },
        {
          id: "advanced-analytics",
          title: "Advanced Analytics",
          description: "Machine learning and predictive analytics",
          icon: <TrendingUp size={20} />,
        },
        {
          id: "business-intelligence",
          title: "Business Intelligence",
          description: "BI platform implementation and optimization",
          icon: <PieChart size={20} />,
        },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Platform Engineering",
      description: "DevOps transformation and platform engineering",
      icon: <Settings size={20} />,
    },
    {
      id: "support",
      title: "Support & Maintenance",
      description: "Ongoing maintenance and support services",
      icon: <Wrench size={20} />,
    },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <NestedDrawer menuData={sampleMenuData} />
    </div>
  );
}

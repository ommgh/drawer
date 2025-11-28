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
  Home,
  Layers,
  Repeat,
  Cpu,
  MessageSquare,
  FileCheck,
  Lock,
  Smartphone,
  Server,
  Globe,
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
  title: "Main Menu",
  items: [
    {
      id: "home",
      title: "Home",
      description: "Return to the dashboard overview",
      icon: <Home size={20} />,
    },
    // SECTION 1: ENGINEERING (Deep Nesting)
    {
      id: "engineering",
      title: "Software Engineering",
      description: "End-to-end development services",
      icon: <Code size={20} />,
      items: [
        {
          id: "web-dev",
          title: "Web Development",
          description: "Scalable web applications",
          icon: <Globe size={20} />,
          items: [
            {
              id: "frontend",
              title: "Frontend Architecture",
              description: "React, Next.js & Vue solutions",
              icon: <Layers size={20} />,
            },
            {
              id: "backend",
              title: "Backend Systems",
              description: "Node.js, Go, and Python APIs",
              icon: <Server size={20} />,
            },
          ],
        },
        {
          id: "mobile-dev",
          title: "Mobile Development",
          description: "Native and cross-platform apps",
          icon: <Smartphone size={20} />,
          items: [
            {
              id: "ios-android",
              title: "Native (iOS/Android)",
              description: "Swift & Kotlin development",
              icon: <Code size={20} />,
            },
            {
              id: "flutter-rn",
              title: "Cross-Platform",
              description: "Flutter & React Native",
              icon: <Repeat size={20} />,
            },
          ],
        },
      ],
    },
    // SECTION 2: CLOUD (Deep Nesting)
    {
      id: "cloud-infra",
      title: "Cloud & DevOps",
      description: "Infrastructure as code and automation",
      icon: <Cloud size={20} />,
      items: [
        {
          id: "cloud-migration",
          title: "Cloud Migration",
          description: "Move legacy systems to the cloud",
          icon: <Zap size={20} />,
          items: [
            {
              id: "aws-azure",
              title: "AWS & Azure Setup",
              description: "Enterprise environment setup",
              icon: <Cloud size={20} />,
            },
          ],
        },
        {
          id: "devops-auto",
          title: "DevOps Automation",
          description: "CI/CD pipelines and containerization",
          icon: <Settings size={20} />,
          items: [
            {
              id: "cicd",
              title: "CI/CD Pipelines",
              description: "Automated testing and deployment",
              icon: <Repeat size={20} />,
            },
            {
              id: "kubernetes",
              title: "Kubernetes Management",
              description: "Container orchestration",
              icon: <Layers size={20} />,
            },
          ],
        },
      ],
    },
    // SECTION 3: DATA (Deep Nesting)
    {
      id: "data-ai",
      title: "Data & AI",
      description: "Turn data into actionable insights",
      icon: <BarChart3 size={20} />,
      items: [
        {
          id: "data-engineering",
          title: "Data Engineering",
          description: "Pipelines and warehousing",
          icon: <Database size={20} />,
          items: [
            {
              id: "etl",
              title: "ETL Pipelines",
              description: "High-volume data processing",
              icon: <Repeat size={20} />,
            },
          ],
        },
        {
          id: "advanced-ai",
          title: "Artificial Intelligence",
          description: "ML models and generative AI",
          icon: <Cpu size={20} />,
          items: [
            {
              id: "nlp",
              title: "NLP Solutions",
              description: "Chatbots and text analysis",
              icon: <MessageSquare size={20} />,
            },
            {
              id: "predictive",
              title: "Predictive Analytics",
              description: "Forecasting market trends",
              icon: <TrendingUp size={20} />,
            },
          ],
        },
      ],
    },
    // SECTION 4: SECURITY (Deep Nesting)
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protecting digital assets",
      icon: <Shield size={20} />,
      items: [
        {
          id: "security-audit",
          title: "Security Audits",
          description: "Vulnerability assessments",
          icon: <FileCheck size={20} />,
          items: [
            {
              id: "pentest",
              title: "Penetration Testing",
              description: "Ethical hacking simulations",
              icon: <Lock size={20} />,
            },
            {
              id: "compliance",
              title: "Compliance (SOC2/ISO)",
              description: "Regulatory adherence",
              icon: <Shield size={20} />,
            },
          ],
        },
      ],
    },
    {
      id: "consulting",
      title: "Strategic Consulting",
      description: "Expert guidance for C-Suite",
      icon: <Users size={20} />,
    },
    {
      id: "support",
      title: "24/7 Support",
      description: "Maintenance and SLA guarantees",
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

"use client";
import { useState } from "react";
import { Home, Settings, FileText } from "lucide-react";
import clsx from "clsx";

type MenuItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const menuItems: MenuItem[] = [
  { id: "home", icon: <Home className="w-5 h-5" />, label: "Home" },
  {
    id: "profile",
    icon: <FileText className="w-5 h-5" />,
    label: "Transactions",
  },
  { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">My App</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={clsx(
                    "flex items-center w-full px-4 py-2 text-left transition-colors duration-200",
                    "hover:bg-gray-700 rounded-md",
                    {
                      "bg-gray-700 border-l-4 border-blue-500":
                        activeItem === item.id,
                    }
                  )}
                  onClick={() => setActiveItem(item.id)}>
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

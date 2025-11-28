"use client";

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "campaigns", label: "Campaign Manager", icon: "🎬" },
    { id: "rss-feeds", label: "RSS Feeds", icon: "📡" },
    { id: "ai-voice", label: "AI Voice & Avatar", icon: "🎤" },
    { id: "content-settings", label: "Content Settings", icon: "✍️" },
    { id: "video-customization", label: "Video Customization", icon: "🎨" },
    { id: "youtube-settings", label: "YouTube Settings", icon: "▶️" },
    { id: "brand-integration", label: "Brand Integration", icon: "💼" },
    { id: "video-library", label: "Video Library", icon: "📚" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          VideoAutomation AI
        </h1>
        <p className="text-xs text-gray-400 mt-1">Scale Your Content</p>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              currentView === item.id
                ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105"
                : "hover:bg-gray-700 hover:transform hover:translate-x-1"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
        <div className="bg-gray-700 rounded-lg p-3">
          <p className="text-xs text-gray-400">Videos Created Today</p>
          <p className="text-2xl font-bold text-green-400">42</p>
        </div>
      </div>
    </aside>
  );
}


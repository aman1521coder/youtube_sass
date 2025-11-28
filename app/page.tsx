"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import CampaignManager from "@/components/CampaignManager";
import RSSFeedManager from "@/components/RSSFeedManager";
import AIVoiceAvatar from "@/components/AIVoiceAvatar";
import ContentSettings from "@/components/ContentSettings";
import VideoCustomization from "@/components/VideoCustomization";
import YouTubeSettings from "@/components/YouTubeSettings";
import BrandIntegration from "@/components/BrandIntegration";
import VideoLibrary from "@/components/VideoLibrary";

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "campaigns":
        return <CampaignManager />;
      case "rss-feeds":
        return <RSSFeedManager />;
      case "ai-voice":
        return <AIVoiceAvatar />;
      case "content-settings":
        return <ContentSettings />;
      case "video-customization":
        return <VideoCustomization />;
      case "youtube-settings":
        return <YouTubeSettings />;
      case "brand-integration":
        return <BrandIntegration />;
      case "video-library":
        return <VideoLibrary />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}


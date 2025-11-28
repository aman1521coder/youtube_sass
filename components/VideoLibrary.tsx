"use client";

import { useState } from "react";

export default function VideoLibrary() {
  const [filter, setFilter] = useState("all");

  const videos = [
    {
      title: "AI Revolution in 2025: What You Need to Know",
      channel: "Tech News Daily",
      date: "2025-11-28",
      status: "Published",
      views: "24.5K",
      likes: "1.2K",
      duration: "8:45",
      thumbnail: "tech",
    },
    {
      title: "Stock Market Analysis: Tech Giants Performance",
      channel: "Finance Hub Pro",
      date: "2025-11-28",
      status: "Published",
      views: "18.3K",
      likes: "892",
      duration: "12:20",
      thumbnail: "finance",
    },
    {
      title: "5 Morning Habits for Better Health",
      channel: "Wellness Journey",
      date: "2025-11-28",
      status: "Processing",
      views: "-",
      likes: "-",
      duration: "6:30",
      thumbnail: "health",
    },
    {
      title: "Breaking: Major Policy Changes Announced",
      channel: "Tech News Daily",
      date: "2025-11-28",
      status: "Uploading",
      views: "-",
      likes: "-",
      duration: "5:15",
      thumbnail: "news",
    },
    {
      title: "Cryptocurrency Update: Bitcoin Reaches New Heights",
      channel: "Finance Hub Pro",
      date: "2025-11-27",
      status: "Published",
      views: "31.2K",
      likes: "1.8K",
      duration: "10:05",
      thumbnail: "finance",
    },
    {
      title: "Productivity Hacks for Remote Workers",
      channel: "Wellness Journey",
      date: "2025-11-27",
      status: "Published",
      views: "15.7K",
      likes: "743",
      duration: "7:50",
      thumbnail: "health",
    },
  ];

  const filteredVideos = filter === "all" ? videos : videos.filter((v) => v.status.toLowerCase() === filter);

  const getThumbnailColor = (type: string) => {
    const colors: Record<string, string> = {
      tech: "from-blue-500 to-purple-600",
      finance: "from-green-500 to-teal-600",
      health: "from-pink-500 to-rose-600",
      news: "from-red-500 to-orange-600",
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Video Library</h2>
        <p className="text-gray-600 mt-2">Browse and manage all your generated videos</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Videos
            </button>
            <button
              onClick={() => setFilter("published")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === "published"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setFilter("processing")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === "processing"
                  ? "bg-yellow-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Processing
            </button>
            <button
              onClick={() => setFilter("uploading")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === "uploading"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Uploading
            </button>
          </div>

          <div className="flex space-x-2">
            <input
              type="search"
              placeholder="Search videos..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Channels</option>
              <option>Tech News Daily</option>
              <option>Finance Hub Pro</option>
              <option>Wellness Journey</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort: Latest First</option>
              <option>Sort: Oldest First</option>
              <option>Sort: Most Views</option>
              <option>Sort: Most Likes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Thumbnail */}
            <div className={`relative h-48 bg-gradient-to-br ${getThumbnailColor(video.thumbnail)}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl opacity-50">▶</div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    video.status === "Published"
                      ? "bg-green-500 text-white"
                      : video.status === "Processing"
                      ? "bg-yellow-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {video.status}
                </span>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-5">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{video.channel}</p>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>👁️ {video.views}</span>
                <span>👍 {video.likes}</span>
                <span>📅 {video.date}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 transition-all font-medium text-sm">
                  View
                </button>
                <button className="flex-1 bg-purple-100 text-purple-700 py-2 rounded-lg hover:bg-purple-200 transition-all font-medium text-sm">
                  Edit
                </button>
                <button className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-all font-medium text-sm">
                  ⋮
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">1</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium">
          3
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium">
          Next
        </button>
      </div>

      {/* Bulk Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Bulk Actions</h3>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            Export Selected
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            Download Selected
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            Delete Selected
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}


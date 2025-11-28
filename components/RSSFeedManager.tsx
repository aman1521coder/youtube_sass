"use client";

import { useState } from "react";

export default function RSSFeedManager() {
  const [newFeed, setNewFeed] = useState("");

  const feeds = [
    { url: "https://techcrunch.com/feed/", category: "Technology", status: "Active", articles: 156 },
    { url: "https://www.bloomberg.com/feed/", category: "Finance", status: "Active", articles: 243 },
    { url: "https://www.health.com/rss", category: "Health", status: "Active", articles: 89 },
    { url: "https://www.espn.com/rss", category: "Sports", status: "Inactive", articles: 0 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">RSS Feed Manager</h2>
        <p className="text-gray-600 mt-2">Manage content sources for your campaigns</p>
      </div>

      {/* Add New Feed */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Add New RSS Feed</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <input
              type="url"
              value={newFeed}
              onChange={(e) => setNewFeed(e.target.value)}
              placeholder="https://example.com/feed/"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select Category</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Health</option>
              <option>Sports</option>
              <option>Entertainment</option>
              <option>News</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            + Add Feed
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
            Test Feed
          </button>
        </div>
      </div>

      {/* Feed Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Feed Filters & Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Keyword Filters (Include)</label>
            <input
              type="text"
              placeholder="e.g., AI, Technology, Innovation"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Comma-separated keywords to include</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Keyword Filters (Exclude)</label>
            <input
              type="text"
              placeholder="e.g., Politics, Controversial"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Comma-separated keywords to exclude</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Article Length</label>
            <input
              type="number"
              placeholder="500"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum words in article</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check Frequency</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Every 15 minutes</option>
              <option>Every 30 minutes</option>
              <option>Every hour</option>
              <option>Every 2 hours</option>
              <option>Every 6 hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Feeds */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Active RSS Feeds</h3>
        <div className="space-y-4">
          {feeds.map((feed, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-gray-800">{feed.url}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        feed.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {feed.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 mt-2 text-sm text-gray-600">
                    <span>📁 {feed.category}</span>
                    <span>📄 {feed.articles} articles fetched</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all font-medium text-sm">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-all font-medium text-sm">
                    Refresh
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all font-medium text-sm">
                    Remove
                  </button>
                </div>
              </div>
              
              {/* Feed Stats */}
              <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-600">Last Check</p>
                  <p className="text-sm font-bold text-gray-800">5 min ago</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">New Today</p>
                  <p className="text-sm font-bold text-green-600">12</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">Used</p>
                  <p className="text-sm font-bold text-blue-600">8</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">Success Rate</p>
                  <p className="text-sm font-bold text-purple-600">94%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


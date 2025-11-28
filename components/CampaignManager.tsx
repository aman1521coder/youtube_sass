"use client";

import { useState } from "react";

export default function CampaignManager() {
  const [showNewCampaign, setShowNewCampaign] = useState(false);

  const campaigns = [
    { name: "Tech News Daily", niche: "Technology", videos: 145, status: "Active", frequency: "4x/day" },
    { name: "Finance Hub", niche: "Finance", videos: 98, status: "Active", frequency: "3x/day" },
    { name: "Wellness Channel", niche: "Health", videos: 67, status: "Active", frequency: "2x/day" },
    { name: "Sports Today", niche: "Sports", videos: 23, status: "Paused", frequency: "5x/day" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Campaign Manager</h2>
          <p className="text-gray-600 mt-2">Manage your YouTube automation campaigns</p>
        </div>
        <button
          onClick={() => setShowNewCampaign(!showNewCampaign)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
        >
          + New Campaign
        </button>
      </div>

      {/* New Campaign Form */}
      {showNewCampaign && (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Create New Campaign</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                placeholder="e.g., Tech News Daily"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Niche/Category</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Technology</option>
                <option>Finance</option>
                <option>Health & Wellness</option>
                <option>Sports</option>
                <option>Entertainment</option>
                <option>News</option>
                <option>Education</option>
                <option>Business</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">YouTube Channel</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Channel</option>
                <option>Channel 1 - Tech Focus</option>
                <option>Channel 2 - Finance Pro</option>
                <option>Channel 3 - Health Life</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Video Frequency</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1 video per day</option>
                <option>2 videos per day</option>
                <option>3 videos per day</option>
                <option>4 videos per day</option>
                <option>5 videos per day</option>
                <option>Custom Schedule</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Video Duration</label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Min (seconds)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max (seconds)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* RSS Feeds Section */}
          <div className="mt-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">RSS Feeds</h4>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <input
                  type="url"
                  placeholder="https://example.com/rss"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium">
                  + Add Feed
                </button>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                <span className="text-sm text-gray-700">https://techcrunch.com/feed/</span>
                <button className="text-red-600 hover:text-red-800 font-medium">Remove</button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              Create Campaign
            </button>
            <button
              onClick={() => setShowNewCampaign(false)}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Existing Campaigns */}
      <div className="grid grid-cols-1 gap-6">
        {campaigns.map((campaign, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold text-gray-800">{campaign.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>
                <div className="flex items-center space-x-6 mt-3 text-sm text-gray-600">
                  <span>📁 {campaign.niche}</span>
                  <span>🎬 {campaign.videos} videos</span>
                  <span>⏰ {campaign.frequency}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all font-medium">
                  Edit
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium">
                  Settings
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all font-medium">
                  {campaign.status === "Active" ? "Pause" : "Activate"}
                </button>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 font-semibold">RSS Feeds</p>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 font-semibold">Today's Videos</p>
                  <p className="text-2xl font-bold text-purple-600">4</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 font-semibold">Avg Views</p>
                  <p className="text-2xl font-bold text-green-600">12.5K</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 font-semibold">Revenue</p>
                  <p className="text-2xl font-bold text-yellow-600">$245</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


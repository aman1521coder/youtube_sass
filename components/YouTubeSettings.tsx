"use client";

export default function YouTubeSettings() {
  const connectedChannels = [
    { name: "Tech News Daily", subscribers: "125K", monetized: true, status: "Active" },
    { name: "Finance Hub Pro", subscribers: "89K", monetized: true, status: "Active" },
    { name: "Wellness Journey", subscribers: "67K", monetized: true, status: "Active" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">YouTube Settings</h2>
        <p className="text-gray-600 mt-2">Manage YouTube channels, upload settings, and monetization</p>
      </div>

      {/* Connected Channels */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">▶️ Connected YouTube Channels</h3>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            + Connect New Channel
          </button>
        </div>

        <div className="space-y-4">
          {connectedChannels.map((channel, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {channel.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{channel.name}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>👥 {channel.subscribers} subscribers</span>
                      <span className={`px-2 py-1 rounded ${channel.monetized ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {channel.monetized ? '✓ Monetized' : 'Not Monetized'}
                      </span>
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                        {channel.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all font-medium">
                    Settings
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all font-medium">
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">📤 Upload Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Default Privacy</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Public</option>
              <option>Unlisted</option>
              <option>Private</option>
              <option>Scheduled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Schedule</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Immediate Upload</option>
              <option>Schedule for Best Time</option>
              <option>Custom Schedule</option>
              <option>Queue System</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>News & Politics</option>
              <option>Science & Technology</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Howto & Style</option>
              <option>People & Blogs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Portuguese</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Made for kids</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Allow embedding</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Publish to subscriptions feed and notify subscribers</span>
          </label>
        </div>
      </div>

      {/* Thumbnail Generation */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🖼️ Thumbnail Generation</h3>

        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Auto-generate thumbnails with AI</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Thumbnail Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Bold Text + Image</option>
              <option>Face Close-up</option>
              <option>Split Screen</option>
              <option>Before/After</option>
              <option>News Style</option>
              <option>Minimal Clean</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Text Size</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Large (High Impact)</option>
              <option>Medium</option>
              <option>Small</option>
              <option>No Text</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Thumbnail Text Template</label>
          <input
            type="text"
            placeholder="e.g., [TITLE] • [YEAR]"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-2">Variables: [TITLE], [TOPIC], [YEAR], [CATEGORY]</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border-2 border-blue-500 rounded-lg p-3 bg-blue-50">
            <div className="w-full h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded mb-2"></div>
            <p className="text-xs font-semibold text-center">Style 1</p>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-3 hover:border-blue-400 cursor-pointer">
            <div className="w-full h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded mb-2"></div>
            <p className="text-xs font-semibold text-center">Style 2</p>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-3 hover:border-blue-400 cursor-pointer">
            <div className="w-full h-24 bg-gradient-to-br from-green-600 to-teal-600 rounded mb-2"></div>
            <p className="text-xs font-semibold text-center">Style 3</p>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-3 hover:border-blue-400 cursor-pointer">
            <div className="w-full h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded mb-2"></div>
            <p className="text-xs font-semibold text-center">Style 4</p>
          </div>
        </div>
      </div>

      {/* Tags & Description */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🏷️ Tags & Description Generation</h3>

        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Auto-generate tags from content</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Auto-generate description with hashtags</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description Template (AI Editable Prompt)</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            rows={10}
            defaultValue={`Generate a YouTube description for this video:

Title: [TITLE]
Topic: [TOPIC]

Include:
- Engaging introduction (2-3 sentences)
- Key points covered in the video
- 5-10 relevant hashtags
- Call to action (subscribe, like, comment)
- Copyright disclaimer: "This content is created using AI and aggregated from public news sources. All rights belong to original publishers."
- Links section (if applicable)

Make it SEO-optimized and engaging.`}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Copyright Disclaimer</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            defaultValue="⚠️ Disclaimer: This video contains AI-generated content based on publicly available news sources. All rights belong to the original publishers. Fair use applies."
          />
        </div>
      </div>

      {/* Monetization & End Screens */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">💰 Monetization & End Screens</h3>

        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Enable monetization (if channel is eligible)</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Display ads</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Overlay ads</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Skippable video ads</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Non-skippable video ads</span>
            </label>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h4 className="font-bold text-gray-800 mb-4">End Screen Elements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Subscribe button</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Latest upload</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Best for viewer</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Playlist</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}


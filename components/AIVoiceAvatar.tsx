"use client";

export default function AIVoiceAvatar() {
  const voiceOptions = [
    { name: "Sarah - Professional Female", language: "English (US)", style: "Professional", preview: "🔊" },
    { name: "John - Business Male", language: "English (US)", style: "Business", preview: "🔊" },
    { name: "Emily - Friendly Female", language: "English (UK)", style: "Conversational", preview: "🔊" },
    { name: "Michael - News Anchor", language: "English (US)", style: "Authoritative", preview: "🔊" },
  ];

  const avatarOptions = [
    { name: "Professional Female", style: "Business", ethnicity: "Caucasian" },
    { name: "Young Male Tech Host", style: "Casual", ethnicity: "Asian" },
    { name: "News Anchor Female", style: "Formal", ethnicity: "African American" },
    { name: "Lifestyle Influencer", style: "Trendy", ethnicity: "Hispanic" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">AI Voice & Avatar Settings</h2>
        <p className="text-gray-600 mt-2">Configure text-to-speech and AI avatars with lip sync</p>
      </div>

      {/* Voice Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🎤 Voice Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Voice</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select a voice...</option>
              {voiceOptions.map((voice, index) => (
                <option key={index}>{voice.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Portuguese</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>

        {/* Voice Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Speech Speed: <span className="text-blue-600">1.0x</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              defaultValue="1"
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5x Slow</span>
              <span>2.0x Fast</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pitch: <span className="text-blue-600">Normal</span>
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="1"
              defaultValue="0"
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tone: <span className="text-blue-600">Neutral</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Neutral", "Happy", "Serious", "Excited", "Calm"].map((tone) => (
                <button
                  key={tone}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all font-medium"
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Voice Preview */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3">Voice Preview</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <textarea
              placeholder="Type text here to preview the voice..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              rows={3}
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
              🔊 Preview Voice
            </button>
          </div>
        </div>
      </div>

      {/* Avatar Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">👤 AI Avatar Settings</h3>

        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Enable AI Avatar with Lip Sync</span>
          </label>
          <p className="text-sm text-gray-600">Creates natural-looking avatar with synchronized lip movements</p>
        </div>

        {/* Avatar Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {avatarOptions.map((avatar, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-white text-6xl">
                👤
              </div>
              <h4 className="font-bold text-gray-800 text-sm">{avatar.name}</h4>
              <p className="text-xs text-gray-600">{avatar.style} • {avatar.ethnicity}</p>
            </div>
          ))}
        </div>

        {/* Avatar Customization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Avatar Position</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Bottom Right</option>
              <option>Bottom Left</option>
              <option>Top Right</option>
              <option>Top Left</option>
              <option>Center</option>
              <option>Full Screen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Avatar Size</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Small (20%)</option>
              <option>Medium (35%)</option>
              <option>Large (50%)</option>
              <option>Extra Large (75%)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Background Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Transparent</option>
              <option>Blur Background</option>
              <option>Solid Color</option>
              <option>Green Screen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Lip Sync Quality</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>High Quality (Slower)</option>
              <option>Balanced</option>
              <option>Fast (Lower Quality)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Custom Avatar Upload */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Custom Avatar</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
          <div className="text-6xl mb-4">📤</div>
          <p className="text-gray-700 font-medium mb-2">Drag & drop your avatar image or video</p>
          <p className="text-sm text-gray-500 mb-4">Supports JPG, PNG, MP4 (Max 50MB)</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium">
            Choose File
          </button>
        </div>
      </div>
    </div>
  );
}


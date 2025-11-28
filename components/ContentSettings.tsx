"use client";

export default function ContentSettings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Content Settings</h2>
        <p className="text-gray-600 mt-2">Configure AI content rewriting and customize your video scripts</p>
      </div>

      {/* AI Rewriter Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">✍️ AI Content Rewriter</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Rewriting Style</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Professional & Informative</option>
            <option>Conversational & Friendly</option>
            <option>Engaging & Entertaining</option>
            <option>Educational & Detailed</option>
            <option>News Reporting Style</option>
            <option>Casual & Relatable</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Content Length</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Short (30-60 seconds)</option>
            <option>Medium (1-3 minutes)</option>
            <option>Long (3-5 minutes)</option>
            <option>Extended (5-10 minutes)</option>
            <option>Match Source Length</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Custom AI Prompt (Editable)</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            rows={8}
            defaultValue={`You are a professional content creator. Rewrite the following article into an engaging video script.

Requirements:
- Make it conversational and easy to understand
- Keep the main facts and key points accurate
- Add engaging hooks and transitions
- Structure: Hook → Main Content → Call to Action
- Optimize for viewer retention
- Use simple, clear language
- Add natural pauses for emphasis

Rewrite this content:`}
          />
          <p className="text-xs text-gray-500 mt-2">Customize this prompt to control how AI rewrites your content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Remove duplicate sentences</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Add natural transitions</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Include statistics & data</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Optimize for SEO keywords</span>
            </label>
          </div>
        </div>
      </div>

      {/* Intro Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🎬 Intro Settings</h3>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Include Custom Intro</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Intro Text Template</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Welcome to [CHANNEL_NAME]! In today's video, we'll be discussing [TOPIC]..."
          />
          <p className="text-xs text-gray-500 mt-2">Available variables: [CHANNEL_NAME], [TOPIC], [DATE], [CATEGORY]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Intro Duration</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>3 seconds</option>
              <option>5 seconds</option>
              <option>7 seconds</option>
              <option>10 seconds</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Intro Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Animated Logo</option>
              <option>Text Only</option>
              <option>Video Clip</option>
              <option>Channel Branding</option>
            </select>
          </div>
        </div>
      </div>

      {/* Outro Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🎭 Outro Settings</h3>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Include Custom Outro</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Outro Text Template</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Thanks for watching! Don't forget to subscribe and hit the notification bell. See you in the next video!"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Outro Duration</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>5 seconds</option>
              <option>7 seconds</option>
              <option>10 seconds</option>
              <option>15 seconds</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Call-to-Action</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Subscribe + Like</option>
              <option>Subscribe Only</option>
              <option>Subscribe + Bell</option>
              <option>Custom CTA</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Add end screen elements automatically</span>
          </label>
        </div>
      </div>

      {/* Script Preview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📄 Script Preview & Test</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-600 mb-2">Test your content settings with sample text:</p>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
            rows={5}
            placeholder="Paste sample content here to test the AI rewriter..."
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            🔄 Generate Preview
          </button>
        </div>
      </div>
    </div>
  );
}


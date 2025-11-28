"use client";

export default function VideoCustomization() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Video Customization</h2>
        <p className="text-gray-600 mt-2">Configure visual elements, captions, themes, and image slideshows</p>
      </div>

      {/* Captions & Subtitles */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">📝 Captions & Subtitles (CapCut Style)</h3>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Enable Auto Captions</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Caption Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Modern Bold</option>
              <option>Classic Subtitle</option>
              <option>Minimal Clean</option>
              <option>Neon Glow</option>
              <option>3D Pop Out</option>
              <option>Typewriter</option>
              <option>Animated Bounce</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Font Family</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Montserrat (Bold)</option>
              <option>Roboto</option>
              <option>Poppins</option>
              <option>Arial</option>
              <option>Impact</option>
              <option>Bebas Neue</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Font Size</label>
            <input
              type="number"
              defaultValue="48"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Caption Position</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Bottom Center</option>
              <option>Top Center</option>
              <option>Middle Center</option>
              <option>Bottom Third</option>
            </select>
          </div>
        </div>

        {/* Color Customization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Text Color</label>
            <div className="flex space-x-2">
              <input
                type="color"
                defaultValue="#FFFFFF"
                className="w-16 h-12 rounded border border-gray-300"
              />
              <input
                type="text"
                defaultValue="#FFFFFF"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Outline Color</label>
            <div className="flex space-x-2">
              <input
                type="color"
                defaultValue="#000000"
                className="w-16 h-12 rounded border border-gray-300"
              />
              <input
                type="text"
                defaultValue="#000000"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Background Color</label>
            <div className="flex space-x-2">
              <input
                type="color"
                defaultValue="#00000080"
                className="w-16 h-12 rounded border border-gray-300"
              />
              <input
                type="text"
                defaultValue="Transparent"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Animation Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Word Highlight</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            <span className="text-sm font-medium text-gray-700">Fade In/Out</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Bounce Effect</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Emoji Auto-Add</span>
          </label>
        </div>
      </div>

      {/* Image & Slideshow Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🖼️ Image Slideshow & Background</h3>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Extract images from RSS feeds</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
            <span className="font-semibold text-gray-700">Generate images if none available (Free AI Generator)</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Image Source Priority</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>RSS Feed First → AI Generated</option>
              <option>AI Generated Only</option>
              <option>RSS Feed Only</option>
              <option>Stock Images → AI Generated</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">AI Image Generator</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Meta AI (Free)</option>
              <option>Stable Diffusion (Free)</option>
              <option>DALL-E Mini (Free)</option>
              <option>Craiyon (Free)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Images per Video</label>
            <input
              type="number"
              defaultValue="5"
              min="1"
              max="20"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Image Display Duration</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>3 seconds</option>
              <option>5 seconds</option>
              <option>7 seconds</option>
              <option>Auto (Match narration)</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Transition Effects</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Fade", "Slide", "Zoom", "Dissolve", "Wipe", "Blur", "Flip", "None"].map((effect) => (
              <button
                key={effect}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all font-medium"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Image Prompt for AI Generation</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="e.g., Professional news background, modern technology concept, high quality, 16:9 aspect ratio"
          />
        </div>
      </div>

      {/* News Studio Theme */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">📺 News Studio Theme</h3>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3 mb-4">
            <input type="checkbox" className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-700">Enable News Studio Theme for News Channels</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Studio Theme</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Modern News Studio</option>
              <option>Classic News Desk</option>
              <option>Tech News Studio</option>
              <option>Finance Studio</option>
              <option>Sports Broadcast</option>
              <option>Custom Background</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Lower Third Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Professional Bar</option>
              <option>Minimal Line</option>
              <option>Bold Banner</option>
              <option>Animated Ticker</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Show channel logo</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Show breaking news banner</span>
            </label>
          </div>
        </div>
      </div>

      {/* Video Quality Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Video Quality & Format</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Resolution</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>1920x1080 (Full HD)</option>
              <option>1280x720 (HD)</option>
              <option>3840x2160 (4K)</option>
              <option>2560x1440 (2K)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Frame Rate</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>30 FPS</option>
              <option>60 FPS</option>
              <option>24 FPS (Cinematic)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Aspect Ratio</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>16:9 (YouTube Standard)</option>
              <option>9:16 (Shorts/Vertical)</option>
              <option>1:1 (Square)</option>
              <option>4:3 (Classic)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}


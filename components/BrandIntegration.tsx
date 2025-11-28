"use client";

export default function BrandIntegration() {
  const brandDeals = [
    { brand: "TechGadget Pro", status: "Active", revenue: "$450", videos: 5, category: "Technology" },
    { brand: "HealthPlus Supplements", status: "Pending", revenue: "$0", videos: 0, category: "Health" },
    { brand: "FinanceApp", status: "Completed", revenue: "$1,200", videos: 8, category: "Finance" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Brand Integration</h2>
        <p className="text-gray-600 mt-2">Monetize your AI avatars as influencers with brand partnerships</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <p className="text-sm opacity-90 mb-1">Active Deals</p>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <p className="text-sm opacity-90 mb-1">Total Revenue</p>
          <p className="text-4xl font-bold">$1,650</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <p className="text-sm opacity-90 mb-1">Videos Created</p>
          <p className="text-4xl font-bold">13</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
          <p className="text-sm opacity-90 mb-1">Avg Per Deal</p>
          <p className="text-4xl font-bold">$550</p>
        </div>
      </div>

      {/* Add New Brand Deal */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">💼 New Brand Partnership</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Name</label>
            <input
              type="text"
              placeholder="e.g., TechGadget Pro"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select Category</option>
              <option>Technology</option>
              <option>Health & Wellness</option>
              <option>Finance</option>
              <option>Fashion</option>
              <option>Food & Beverage</option>
              <option>Gaming</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Type</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Product Placement</option>
              <option>Sponsored Segment</option>
              <option>Full Video Sponsorship</option>
              <option>Affiliate Marketing</option>
              <option>Brand Mention</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>5-10 seconds</option>
              <option>15-30 seconds</option>
              <option>30-60 seconds</option>
              <option>Full Integration</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Message/Script</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Enter the brand message or sponsorship script that the AI avatar will deliver..."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Logo/Image</label>
            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Website/Link</label>
            <input
              type="url"
              placeholder="https://brand-website.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
          + Create Brand Deal
        </button>
      </div>

      {/* Active Brand Deals */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Active Brand Deals</h3>

        <div className="space-y-4">
          {brandDeals.map((deal, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                      {deal.brand.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{deal.brand}</h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>📁 {deal.category}</span>
                        <span>🎬 {deal.videos} videos</span>
                        <span className="font-bold text-green-600">{deal.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                      deal.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : deal.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {deal.status}
                  </span>
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all font-medium">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all font-medium">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Integration Settings</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Placement Position</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Beginning (After Intro)</option>
              <option>Middle (Mid-Roll)</option>
              <option>End (Before Outro)</option>
              <option>Multiple Positions</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Avatar Delivery Style</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Natural & Conversational</option>
              <option>Professional & Direct</option>
              <option>Enthusiastic & Excited</option>
              <option>Informative & Educational</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Show brand logo overlay</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Add clickable link in description</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Include discount code</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 text-blue-600" defaultChecked />
              <span className="font-semibold text-gray-700">Track performance analytics</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Disclosure Text</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={2}
              defaultValue="This video contains paid promotion/sponsorship."
            />
            <p className="text-xs text-gray-500 mt-1">Required for FTC compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}


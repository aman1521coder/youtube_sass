"use client";

export default function Dashboard() {
  const stats = [
    { label: "Total Videos", value: "1,247", change: "+12%", color: "blue" },
    { label: "Active Campaigns", value: "8", change: "+2", color: "purple" },
    { label: "Total Views", value: "2.4M", change: "+18%", color: "green" },
    { label: "Revenue", value: "$12,450", change: "+25%", color: "yellow" },
  ];

  const recentVideos = [
    { title: "Breaking News: AI Technology Advances", channel: "Tech News Daily", status: "Published", views: "15.2K" },
    { title: "Market Update: Stock Analysis", channel: "Finance Hub", status: "Processing", views: "-" },
    { title: "Health Tips: Morning Routine", channel: "Wellness Channel", status: "Published", views: "8.9K" },
    { title: "Sports Highlights: Weekly Recap", channel: "Sports Today", status: "Uploading", views: "-" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-gray-600 mt-2">Monitor your content automation performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Video Production Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Video Production Timeline</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 45, 78, 52, 88, 95, 72, 85, 92, 68, 75, 82].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              + New Campaign
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              + Add RSS Feed
            </button>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              Generate Video Now
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Recent Videos Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Videos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Title</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Channel</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Views</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentVideos.map((video, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-800">{video.title}</td>
                  <td className="py-4 px-4 text-gray-600">{video.channel}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        video.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : video.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {video.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{video.views}</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


"use client";

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              VideoAutomation AI
            </span>
          </div>
          <button
            onClick={onGetStarted}
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Launch App
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Automate Your YouTube
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Empire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Create 100+ professional videos per day with AI avatars, automated publishing, and zero manual work.
            Scale your content across unlimited channels and niches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started Free →
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all">
              Watch Demo
            </button>
          </div>
          <p className="text-gray-400 mt-4">No credit card required • Setup in 5 minutes</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "100+", label: "Videos Per Day" },
            { value: "∞", label: "Channels Supported" },
            { value: "40+", label: "Languages" },
            { value: "100%", label: "Automated" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-gray-300">
            From content sourcing to publishing - fully automated
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🎬",
              title: "Campaign Management",
              description: "Create unlimited campaigns per channel. Configure frequency, schedule, and content sources.",
            },
            {
              icon: "🤖",
              title: "AI Avatar & Voice",
              description: "Professional AI avatars with lip sync. 40+ voices, adjustable speed, pitch, and tone.",
            },
            {
              icon: "📡",
              title: "RSS Feed Integration",
              description: "Auto-fetch content from unlimited RSS feeds. Smart filtering and keyword targeting.",
            },
            {
              icon: "✍️",
              title: "AI Content Rewriter",
              description: "Transform articles into engaging scripts. Custom prompts, multiple styles, SEO optimized.",
            },
            {
              icon: "🎨",
              title: "CapCut-Style Captions",
              description: "Animated captions with word highlighting. Fully customizable fonts, colors, and effects.",
            },
            {
              icon: "🖼️",
              title: "Smart Image Generation",
              description: "Extract from RSS or generate with AI. Create stunning slideshows automatically.",
            },
            {
              icon: "📺",
              title: "News Studio Themes",
              description: "Professional broadcast themes for news channels. Lower thirds and branding.",
            },
            {
              icon: "🏷️",
              title: "Auto Tags & Descriptions",
              description: "AI-generated tags, thumbnails, and SEO-optimized descriptions with hashtags.",
            },
            {
              icon: "💰",
              title: "Brand Integration",
              description: "Monetize AI avatars as influencers. Manage sponsorships and track revenue.",
            },
            {
              icon: "▶️",
              title: "Auto YouTube Upload",
              description: "Publish directly to YouTube. Monetization, end screens, and scheduling included.",
            },
            {
              icon: "📊",
              title: "Analytics Dashboard",
              description: "Track performance across all channels. Views, revenue, and growth metrics.",
            },
            {
              icon: "🔄",
              title: "Batch Processing",
              description: "Queue management for bulk video creation. Scale to 100+ videos per day.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20 bg-white/5 backdrop-blur">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">
            4 simple steps to automated content at scale
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Connect Your Channels",
              description: "Link your YouTube channels and configure campaign settings for each niche.",
            },
            {
              step: "02",
              title: "Add Content Sources",
              description: "Add RSS feeds, configure AI rewriter, select voices and avatars.",
            },
            {
              step: "03",
              title: "Customize & Brand",
              description: "Set up captions, thumbnails, intros/outros, and brand integrations.",
            },
            {
              step: "04",
              title: "Automate & Scale",
              description: "Let AI generate, edit, and publish videos 24/7. Monitor from dashboard.",
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-6 mb-12 items-start">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perfect For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Content Creators",
              description: "Scale from 3 channels to 50+ channels across multiple niches without hiring a team.",
            },
            {
              title: "News Channels",
              description: "Automate breaking news coverage with AI anchors, studio themes, and instant publishing.",
            },
            {
              title: "Influencer Marketing",
              description: "Use AI avatars as brand ambassadors. Multiple sponsorship deals per video.",
            },
          ].map((useCase, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/20 rounded-xl p-8 hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Scale Your Content?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join content creators producing 40+ videos per day with zero manual work
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Creating Now →
          </button>
          <p className="text-white/80 mt-4">Currently supporting 40 videos/day • Ready to scale to 100+</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p className="mb-4">© 2025 VideoAutomation AI. All rights reserved.</p>
          <p className="text-sm">Built for content creators who want to dominate YouTube at scale 🚀</p>
        </div>
      </footer>
    </div>
  );
}


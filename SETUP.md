# Setup Instructions

## Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** version 18 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**

### Step 1: Install Node.js (if not installed)

#### On Ubuntu/Debian:
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### On macOS:
```bash
# Using Homebrew
brew install node

# Verify installation
node --version
npm --version
```

#### On Windows:
Download and install from [nodejs.org](https://nodejs.org/)

---

### Step 2: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd /home/oem/Documents/upwork_job1
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- All development dependencies

**Installation time**: 2-5 minutes depending on your internet speed

---

### Step 3: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.5s
```

---

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the YouTube Automation Platform UI with:
- Sidebar navigation on the left
- Dashboard view in the center
- Modern, gradient-based design

---

## 🎯 Navigation Guide

### Available Sections (click in sidebar):

1. **📊 Dashboard** - Overview of all stats and recent videos
2. **🎬 Campaign Manager** - Create and manage campaigns
3. **📡 RSS Feeds** - Manage content sources
4. **🎤 AI Voice & Avatar** - Configure TTS and avatars
5. **✍️ Content Settings** - AI rewriter and intro/outro
6. **🎨 Video Customization** - Captions, themes, images
7. **▶️ YouTube Settings** - Channel integration and upload settings
8. **💼 Brand Integration** - Manage brand partnerships
9. **📚 Video Library** - Browse all generated videos

---

## 🔧 Development Commands

### Start Development Server
```bash
npm run dev
```
Runs on http://localhost:3000 with hot-reload enabled

### Build for Production
```bash
npm run build
```
Creates optimized production build in `.next/` folder

### Start Production Server
```bash
npm run build
npm start
```
Runs the production build

### Run Linter
```bash
npm run lint
```
Checks for code quality issues

---

## 📁 Project Structure Explained

```
upwork_job1/
│
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout (wraps all pages)
│   └── page.tsx                 # Main page with routing logic
│
├── components/                   # React components
│   ├── Sidebar.tsx              # Left navigation sidebar
│   ├── Dashboard.tsx            # Dashboard overview page
│   ├── CampaignManager.tsx      # Campaign management interface
│   ├── RSSFeedManager.tsx       # RSS feed management
│   ├── AIVoiceAvatar.tsx        # Voice and avatar settings
│   ├── ContentSettings.tsx      # Content rewriter settings
│   ├── VideoCustomization.tsx   # Visual customization options
│   ├── YouTubeSettings.tsx      # YouTube integration settings
│   ├── BrandIntegration.tsx     # Brand partnership management
│   └── VideoLibrary.tsx         # Video library and management
│
├── public/                       # Static files (create as needed)
│
├── node_modules/                 # Dependencies (auto-generated)
│
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
│
├── README.md                     # Project overview
├── FEATURES.md                   # Complete features list
└── SETUP.md                      # This file
```

---

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9',  // Change this to your primary color
        600: '#0284c7',
        // ... more shades
      },
    },
  },
}
```

### Adding New Pages

1. Create new component in `components/`:
```tsx
// components/NewPage.tsx
export default function NewPage() {
  return <div>Your content here</div>;
}
```

2. Import in `app/page.tsx`:
```tsx
import NewPage from "@/components/NewPage";
```

3. Add to routing logic:
```tsx
case "new-page":
  return <NewPage />;
```

4. Add menu item in `Sidebar.tsx`:
```tsx
{ id: "new-page", label: "New Page", icon: "🆕" }
```

---

## 🔍 Troubleshooting

### Issue: "Command 'npm' not found"
**Solution**: Install Node.js (see Step 1)

### Issue: "Port 3000 already in use"
**Solution**: Either stop the other process or use a different port:
```bash
PORT=3001 npm run dev
```

### Issue: Module not found errors
**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not working
**Solution**: Ensure `globals.css` is imported in `layout.tsx`

### Issue: Hot reload not working
**Solution**: Restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev  # Start again
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

**Result**: Your app will be live at `https://your-app.vercel.app`

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 3: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t youtube-automation .
docker run -p 3000:3000 youtube-automation
```

---

## 📝 Environment Variables

Create `.env.local` for environment variables:

```env
# Example variables (add as needed)
NEXT_PUBLIC_APP_NAME=YouTube Automation Platform
NEXT_PUBLIC_API_URL=https://your-backend-api.com

# Add your backend API keys here when implementing backend
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## 🎯 Next Steps

### 1. Explore the UI
- Click through all sections in the sidebar
- Test all form inputs and buttons
- Check responsive design on mobile (resize browser)

### 2. Customize Content
- Update colors in `tailwind.config.ts`
- Modify text content in components
- Add your branding/logos

### 3. Backend Integration (Future)
- Connect to actual YouTube API
- Implement RSS feed parsing
- Set up AI/TTS services
- Configure database for campaigns
- Implement video generation pipeline

### 4. Additional Features
- Add authentication
- Implement real data management
- Connect to external APIs
- Add more analytics

---

## 📚 Useful Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **YouTube Data API**: https://developers.google.com/youtube/v3

---

## 💻 IDE Setup

### Recommended: Visual Studio Code

Install these extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Prettier - Code formatter
- ESLint

### Settings for VS Code (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 🎉 You're Ready!

Your YouTube Automation Platform UI is now set up and running!

**Quick Test Checklist**:
- [ ] Server running on http://localhost:3000
- [ ] Dashboard loads with stats
- [ ] Sidebar navigation works
- [ ] All sections are accessible
- [ ] Forms and inputs are functional
- [ ] UI looks good on different screen sizes

**Need Help?**
- Check the `README.md` for feature overview
- Read `FEATURES.md` for detailed feature documentation
- Review component code in `components/` folder

---

**Happy coding! 🚀**


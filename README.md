<div align="center">

# ✨ Merge.ai

### One AI workspace for everything you create — articles, images, and more.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?logo=node.js&logoColor=white)](https://expressjs.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.com)
[![Neon](https://img.shields.io/badge/Database-Neon%20Postgres-00E599?logo=postgresql&logoColor=white)](https://neon.tech)
[![Gemini](https://img.shields.io/badge/AI-Gemini-4285F4?logo=googlegemini&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

<br/>

**Merge.ai** brings a suite of generative AI tools together in a single, clean dashboard —
write articles, brainstorm blog titles, generate images, edit photos with AI, and get instant
resume feedback, all without switching tabs.

</div>

---

## 🧠 What's Inside

| Tool | Description |
|---|---|
| 📝 **Article Writer** | Generate complete, well-structured articles from a prompt and target length |
| 💡 **Blog Title Generator** | Instantly brainstorm catchy, on-brand blog titles |
| 🎨 **AI Image Generation** | Turn text prompts into images |
| 🪄 **Background Remover** | Cleanly strip the background from any image |
| 🧽 **Object Remover** | Erase unwanted objects from a photo with a single prompt |
| 📄 **Resume Reviewer** | Upload a PDF resume and get AI feedback on strengths & weaknesses |
| 🌐 **Community Feed** | Browse and like creations published by other users |

---

## 🏗️ Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS v4
- React Router
- Clerk (auth UI)
- React Markdown, React Hot Toast, Lucide Icons

**Backend**
- Node.js + Express 5
- Clerk (server-side auth & session/plan handling)
- Neon Serverless Postgres
- Gemini (via OpenAI-compatible API) for text generation
- ClipDrop API for text-to-image
- Cloudinary for image hosting, background removal & object removal
- Multer for file uploads · pdf-parse for resume parsing

---

## 📂 Project Structure

```
Merge.ai/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/          # Home, Dashboard, WriteArticle, BlogTitles,
│   │   │                    GenerateImages, RemoveBackground, RemoveObject,
│   │   │                    ReviewResume, Community, Layout
│   │   └── assets/
│   └── vite.config.js
│
└── server/                 # Express backend
    ├── configs/             # cloudinary, db, multer
    ├── controllers/         # aiController, userController
    ├── middlewares/         # auth (Clerk + plan/usage limits)
    ├── routes/              # aiRoutes, userRoutes
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- A Neon (Postgres) database
- API keys for **Clerk**, **Gemini (Google AI Studio)**, **ClipDrop**, and **Cloudinary**

### 1. Clone the repo
```bash
git clone https://github.com/syncshreyansh/Merge.ai.git
cd Merge.ai
```

### 2. Set up the server
```bash
cd server
npm install
```

Create a `.env` file in `server/`:
```env
DATABASE_URL=your_neon_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the server:
```bash
npm run server
```

### 3. Set up the client
```bash
cd ../client
npm install
```

Create a `.env` file in `client/`:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

Run the client:
```bash
npm run dev
```

The app will be live at **http://localhost:5173** 🎉

---

## 🗺️ Roadmap

- [ ] Team / workspace support
- [ ] More AI models to choose from
- [ ] Usage analytics dashboard
- [ ] Export creations as PDF / DOCX

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a PR.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ by [Shreyansh](https://github.com/syncshreyansh)

</div>


# 🍕 Ember & Crust — Pizza Website

A modern and responsive pizza restaurant website built with **React and Vite**, featuring an elegant design, interactive pizza menu, shopping cart, and online ordering experience.

🌐 **Live Demo:**  
https://diaamohamed26.github.io/pizza-website_react/

📦 **GitHub Repository:**  
https://github.com/diaamohamed26/pizza-website_react

---

## ✨ Features

- 🏠 Modern and responsive homepage
- 🍕 Pizza menu with product details and prices
- 🛒 Interactive shopping cart
- 🔍 Pizza search functionality
- 👤 Authentication UI
- 💳 Checkout page
- 🎁 Rewards page
- 📱 Responsive design for mobile, tablet, and desktop
- 🎨 Premium dark theme with elegant gold accents
- ⚡ Fast development and production builds with Vite
- 🔗 Client-side navigation with React Router
- 💾 Cart data persistence using Local Storage

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend library |
| Vite | Development and build tool |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive UI |
| React Router DOM | Client-side routing |
| Lucide React | Icons |
| Framer Motion | Animations |
| Context API | Global cart state |
| Local Storage | Cart persistence |
| Git & GitHub | Version control |
| GitHub Actions | Automated deployment |
| GitHub Pages | Website hosting |

---

## 📂 Project Structure

```text
pizza-website_react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Rewards.jsx
│   │   ├── Cart.jsx
│   │   ├── Search.jsx
│   │   ├── Auth.jsx
│   │   └── Checkout.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/diaamohamed26/pizza-website_react.git
```

### 2. Navigate to the project

```bash
cd pizza-website_react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite, usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

---

## 🌍 Deployment — GitHub Pages

This project is configured for deployment using **GitHub Actions and GitHub Pages**.

### Vite Configuration

The `base` path must match the GitHub repository name.

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/pizza-website_react/",
});
```

### GitHub Pages Setup

1. Open the repository on GitHub.
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Ensure the deployment workflow exists at:

```text
.github/workflows/deploy.yml
```

5. Push your changes to the `main` branch.

### Deploy Updates

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Actions will automatically build and deploy the website.

### Live Website

https://diaamohamed26.github.io/pizza-website_react/

---

## 🎨 Design

The website uses a premium restaurant-inspired visual identity:

- Dark brown backgrounds
- Warm gold accents
- Elegant typography
- Clean layouts
- Responsive navigation
- Smooth transitions and animations

---

## 📌 Future Improvements

- Backend API integration
- Real user authentication
- Online payment integration
- Order management system
- Admin dashboard
- Customer reviews and ratings
- Real-time order tracking

---

## 👨‍💻 Author

**Diaa Mohamed Abdelazize**

- GitHub: [@diaamohamed26](https://github.com/diaamohamed26)
- LinkedIn: [Diaa Mohamed](https://linkedin.com/in/diaa-mohamed-a50460125)
- Behance: [Diaa Mohamed](https://www.behance.net/diaamohamed119)

---

⭐ If you like this project, consider giving it a star!

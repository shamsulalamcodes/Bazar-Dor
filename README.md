<div align="center">

# 🛒 বাজার দর | Bazar Dor

**প্রয়োজনীয় পণ্যের দাম এক নজরে**
*Daily essential commodity prices in Bangladesh, at a glance.*

[![Live Demo](https://img.shields.io/badge/Live-Demo-16a34a?style=for-the-badge&logo=vercel&logoColor=white)](https://bazardor-one.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[**🌐 Live Site**](https://bazardor-one.vercel.app) · [**🐞 Report a Bug**](https://github.com/shamsulalamcodes/Bazar-Dor/issues)

</div>

---

## 📖 About the Project

**বাজার দর (Bazar Dor)** is a fully Bangla, responsive web app that helps people track the daily prices of everyday essentials such as rice, lentils, oil, vegetables, fish, meat, eggs and spices.

Users can see which prices went up or down today, browse products by category, sort them by price, and open a detailed page for each product to compare minimum, maximum and average prices across different markets and divisions. Price details are protected behind authentication.

---

## ✨ Key Features

1. **📈 Daily price movers:** dedicated sections for the top risers (▲) and fallers (▼) of the day, with green, red and gray change badges.
2. **🔄 Live price ticker:** an infinite scrolling marquee below the navbar showing emoji, name, price per unit and percentage change.
3. **🗂️ Category browsing and sorting:** filter products by category and sort by default, price low to high, or price high to low, with a live product count.
4. **🔎 Product details with market comparison:** minimum, maximum and average price, plus a market-by-market table across divisions (protected route).
5. **🔐 Authentication with Better Auth:** email and password sign up and sign in, plus Google and GitHub social login, with toast notifications for success and errors.
6. **🛡️ Protected routes:** product detail pages redirect unauthenticated visitors to the sign-in page via Next.js `proxy`.
7. **🇧🇩 Full Bangla experience:** Bengali digits, units, dates and the Noto Sans Bengali font throughout.
8. **⏳ Skeleton loaders and custom 404:** smooth loading states while data is fetched, and a friendly Bangla not-found page with a link back home.
9. **📱 Fully responsive:** works on mobile, tablet and desktop, with a collapsing grid, stacking hero and scrollable tables.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, routing, server components |
| [React](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsiveness |
| [HeroUI](https://www.heroui.com/) | UI components and toasts |
| [Better Auth](https://www.better-auth.com/) | Email/password, Google and GitHub authentication |
| [MongoDB](https://www.mongodb.com/) | Auth data storage (users, sessions, accounts) |
| [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | Scrolling price ticker |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🔌 API

Product data is served from a public JSON API:

```
BASE_URL: https://api.api-store.workers.dev/api/bazardor

/products              → all products
/products?category=chal → filter by category
/products/1            → single product
/categories            → all categories
/categories/chal       → single category
```

---

## 👨‍💻 Author

**Shamsul Alam**
GitHub: [@shamsulalamcodes](https://github.com/shamsulalamcodes)

---

<div align="center">

⭐ If you like this project, please give it a star!

</div>

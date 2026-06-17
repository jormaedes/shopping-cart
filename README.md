# 🛒 Shopping Cart

A project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart) — a simple virtual store with product listing and a functional shopping cart.

🔗 **Live demo:** [shopping-cart-theta-amber.vercel.app](https://shopping-cart-theta-amber.vercel.app/)

---

## 📋 About the project

A React application that consumes the [Fake Store API](https://fakestoreapi.com/) to display products, allowing the user to navigate between pages (Home / Shop), add items to the cart, and track the cart item count in real time through the Header.

## ✨ Features

- Product listing fetched from the Fake Store API
- Add products to the cart
- Cart item count visible in the Header
- Page navigation with React Router
- Global cart state management with Zustand

## 🛠️ Tech stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand) — global state management
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [React Router](https://reactrouter.com/) — navigation
- [Fake Store API](https://fakestoreapi.com/) — product data

## 🚀 Running locally

```bash
# Clone the repository
git clone https://github.com/jormaedes/shopping-cart.git

# Move into the project folder
cd shopping-cart

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

## 📁 Project structure

```
src/
├── components/      # Reusable components (Header, etc.)
├── pages/           # Application pages (Home, Shop)
├── store/           # Zustand stores (useCartStore)
├── App.jsx
└── main.jsx
```

## 🔄 Next steps

- [ ] Cart page with item list and total
- [ ] Filter products by category


## 👤 Author

**Igris** ([@jormaedes](https://github.com/jormaedes))

Built as part of the full-stack curriculum at [The Odin Project](https://www.theodinproject.com/).

## 📄 License

This project is for educational purposes only, following The Odin Project curriculum.
# E-Commerce Store

A full-featured e-commerce application built with React, React Context API, and Tailwind CSS.

## Features

- 🛍️ Product browsing with search and category filtering
- 🛒 Shopping cart with add/remove/update quantity functionality
- 💳 Checkout process with form validation
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔄 State management using React Context API

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
├── context/         # React Context providers
│   └── CartContext.jsx
├── data/            # Sample data
│   └── products.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Technologies Used

- **React** - UI library
- **React Router** - Routing
- **React Context API** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Features in Detail

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- View total price
- Cart badge showing item count

### Product Management
- Browse all products
- Search functionality
- Category filtering
- Product detail pages
- Responsive product grid

### Checkout
- Shipping information form
- Payment information form
- Order summary
- Order confirmation

## License

MIT


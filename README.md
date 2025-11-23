# kaif.store - E-commerce Website

A modern, responsive e-commerce website built with React and Tailwind CSS. This is a full-featured online store for fashion and lifestyle products.

## 🚀 Live Demo

[View Live Site](https://kaif-ecommerce.vercel.app) (after deployment)

## ✨ Features

- **Responsive Design**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Product Catalog**: Browse products by category (Men, Women, Kids) and subcategory
- **Shopping Cart**: Add, remove, and update items in cart with persistent storage
- **User Authentication**: Login/Signup functionality with user session management
- **Product Details**: Detailed product pages with image gallery, size selection, and quantity controls
- **Checkout Process**: Complete checkout flow with shipping information and payment options
- **Order Management**: View order history and track orders
- **Search Functionality**: Search products across the catalog
- **Modern UI/UX**: Clean black and white theme with smooth animations

## 🛠️ Technologies Used

### Frontend Framework & Libraries
- **React 19.2.0** - Modern UI library for building user interfaces
- **React Router DOM 7.9.6** - Client-side routing and navigation
- **Vite 7.2.5** - Fast build tool and development server

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework for rapid UI development
- **Google Fonts (Inter)** - Modern typography

### State Management
- **React Context API** - Global state management for cart and user authentication
- **LocalStorage** - Persistent storage for cart and user data

### Payment Integration
- **Stripe** - Payment processing (ready for backend integration)
- **Razorpay** - Alternative payment gateway support

### Development Tools
- **ESLint** - Code linting and quality assurance
- **React Compiler** - Optimized React rendering
- **Babel** - JavaScript compiler

## 📁 Project Structure

```
kaif-ecommerce/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and asset files
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx  # Navigation header
│   │   ├── Footer.jsx  # Site footer
│   │   └── ProductCard.jsx # Product display card
│   ├── context/        # React Context providers
│   │   └── StoreContext.jsx # Cart and auth state
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Landing page
│   │   ├── Collection.jsx # Product listing
│   │   ├── Product.jsx  # Product details
│   │   ├── Cart.jsx    # Shopping cart
│   │   ├── Login.jsx   # Authentication
│   │   ├── PlaceOrder.jsx # Checkout
│   │   ├── Order.jsx   # Order history
│   │   ├── About.jsx   # About page
│   │   └── Contact.jsx # Contact page
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Design Features

- **Black & White Theme**: Minimalist design with clean aesthetics
- **1px Borders**: Subtle borders throughout for visual hierarchy
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Responsive breakpoints for all screen sizes
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kaif-ecommerce.git
   cd kaif-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/kaif-ecommerce.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `kaif-ecommerce` repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### Environment Variables (for production)

Create a `.env` file for Stripe integration:
```
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## 📱 Pages

- **Home** (`/`) - Landing page with hero, categories, and featured products
- **Collection** (`/collection`) - Browse all products with filters
- **Product** (`/product/:id`) - Individual product details
- **Cart** (`/cart`) - Shopping cart management
- **Login** (`/login`) - User authentication
- **Checkout** (`/placeorder`) - Order placement
- **Orders** (`/corder`) - Order history
- **About** (`/about`) - About kaif.store
- **Contact** (`/contact`) - Contact information

## 👤 Author

**Kaif Khan**
- Email: kaifkhan51371@gmail.com
- Phone: +91 7506860428

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons and images from project assets
- Fonts from Google Fonts

---

Made with ❤️ by Kaif Khan

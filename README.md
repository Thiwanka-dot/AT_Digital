# AT Digital Website

A responsive and modern single-page website built using React and Vite, designed for the AT Digital Internship Assessment.
This project showcases a clean UI layout, smooth navigation, and reusable component-based design following current web development best practices.

### Live Demo

🔗 https://at-digital-thiwanka.netlify.app/

### Technologies Used

- React – Component-based JavaScript library for building interactive UIs.

- Vite – Lightweight and fast build tool optimized for React development.

- React Router DOM – Enables smooth client-side navigation without page reloads.

- React Bootstrap – Used for responsive layout and component styling.

> [!Note]
> React Bootstrap was chosen as it is built on top of Bootstrap 5 CSS and provides native React components with the same Bootstrap styling.
This approach allowed better control over custom accordion icons (+ / −) while fully adhering to the Bootstrap framework requirement.

- CSS Modules – Used for locally scoped and maintainable component-specific styling.

### Key Features

- Fully responsive design for mobile, tablet, and desktop.

- Smooth navigation using React Router DOM.

- Clean, modern UI with React Bootstrap and CSS Modules.

- Custom accordion icons with dynamic expand/collapse behavior.

- Fast build and hot reload powered by Vite.

### Project Structure
```
AT-Digital/
├── src/
│   ├── assets/              # Images and logo
│   ├── Components/          # Reusable UI components (Navbar, Accordion, etc.)
│   ├── Pages/               # Page-level components
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json
└── vite.config.js
```
### Installation & Setup

To run this project locally:
```
# Clone the repository
git clone https://github.com/Thiwanka-dot/AT-Digital.git

# Navigate into the folder
cd AT-Digital

# Install dependencies
npm install

# Start development server
npm run dev
```

To create a production build:
```
npm run build
```

### Deployment

This project was deployed on Netlify using the following configuration:

- Build Command: ```npm run build```
- Publish Directory: ```dist```
- Branch: ```main```

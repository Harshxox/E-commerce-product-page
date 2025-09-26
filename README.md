# E-Shop: Amazon-Inspired E-commerce Front-end 🛍️

This project is a multi-page e-commerce website prototype, designed to showcase a professional, clean, and **responsive user interface** inspired by the Amazon look and feel.

---

## 🌟 Tech Stack

The project is built entirely on modern front-end technologies:

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Core structure and content organization across all pages. |
| **CSS3** | Custom Amazon-inspired styling, colors, and layout aesthetics. |
| **Bootstrap 5.3** | Provides a responsive grid system, ready-to-use components (Navbar, Cards, Forms), and utility classes for fast development. |
| **jQuery 3.7.1** | Used for DOM manipulation, dynamic event handling (like the product image gallery functionality), and button interactivity. |

---

## 📁 Project Structure

The files are organized into a clear and maintainable structure:
ecommerce_site/
├── css/
│   └── style.css       # Custom, Amazon-style CSS rules
├── js/
│   └── script.js       # jQuery/JavaScript for interactive features
├── img/
│   ├── product1.jpg    # Placeholder images for products (must be present)
│   ├── product2.jpg
│   └── product3.jpg
├── homepage.html       # Landing page showing 3 product cards
├── product-detail.html # Single product view with details and gallery
├── contact.html        # Contact Us page with a submission form
└── README.md           # This file

---

## 🚀 How to Run the Project

Since this is a purely front-end project, no server setup is required.

1.  **Ensure Images Exist:** Confirm that you have three placeholder images (`product1.jpg`, `product2.jpg`, `product3.jpg`) inside the **`img/`** folder.
2.  **Open:** Navigate to the project folder and double-click **`homepage.html`**.
3.  The site will open immediately in your default web browser.

---

## 💡 Key Features

* **Responsive Design:** Uses Bootstrap's grid system to ensure the layout looks great on mobile, tablet, and desktop devices.
* **Navigable Site:** Links in the custom navbar connect the **Home**, **Product Detail**, and **Contact Us** pages.
* **Dynamic Product Gallery:** On `product-detail.html`, **jQuery** handles the click events on thumbnail images to instantly update the main product image.
* **Amazon Branding:** Features a dark blue navigation bar and the distinct orange/yellow color palette for buttons and price text.

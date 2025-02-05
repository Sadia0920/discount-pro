# Discount PRO 

## Overview
The purpose of this project is to make a website  that serve as a platform for users to discover and access discounts, deals, and promotional codes from various retailers and service providers.

## Live link : https://discount-pro-bbfa4.web.app/

## 🛠 Technologies Used

This project is built using the following technologies:

- ⚛ **[React.js](https://react.dev/)** – A JavaScript library for building dynamic and interactive user interfaces.  
- 📜 **JavaScript (ES6+)** – The core programming language used for development.  
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for fast and responsive UI design.  
- 🔥 **[Firebase](https://firebase.google.com/)** – Used for authentication, database, and cloud storage.
- ⚡ **[Node.js](https://nodejs.org/)** – A runtime environment for executing JavaScript code on the server.  


## Screenshots

![App Screenshot](https://github.com/Sadia0920/discount-pro/blob/main/screenshot.png)

## 🚀 Features

- 🏷️ **Sales Store Display** – If a sale is active, only stores with ongoing sales will be shown on the home page.  
- 🔐 **User Authentication** – Users can **register** and **log in** to access exclusive features.  
- 🎟️ **Coupon Visibility** – Logged-in users can **view coupon details**, while non-logged-in users cannot.  
- ✏️ **Profile Management** – Users can **update their information** after logging in.  
- 📋 **Copy to Clipboard** – Users can **copy coupon codes** with a single click for easy use.  
- 🔄 **Password Reset** – Users can **reset their password** if they forget it.  
- 🛍️ **Shop Redirection** – Users can **redirect to the store’s website** by clicking the **"Use Now"** button.  

## 📦 Dependencies

This project uses the following npm packages:

| Package | Version | Description |
|---------|---------|-------------|
| [animate.css](https://animate.style/) | ^4.1.1 | A library for CSS animations |
| [firebase](https://firebase.google.com/docs/web/setup) | ^11.0.2 | Google Firebase SDK for authentication, database, and storage |
| [localforage](https://localforage.github.io/localForage/) | ^1.10.0 | Offline storage using IndexedDB, WebSQL, or localStorage |
| [match-sorter](https://github.com/kentcdodds/match-sorter) | ^8.0.0 | Utility for sorting and ranking items based on search terms |
| [react](https://react.dev/) | ^18.3.1 | JavaScript library for building user interfaces |
| [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard) | ^5.1.0 | Copy text to the clipboard in React applications |
| [react-dom](https://react.dev/) | ^18.3.1 | React package for DOM rendering |
| [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | ^1.6.5 | A fast and smooth marquee animation for React |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.3.0 | A library for using popular icon packs in React |
| [react-rating](https://www.npmjs.com/package/react-rating) | ^2.0.5 | A customizable star rating component for React |
| [react-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component) | ^2.2.0 | Another simple star rating component for React |
| [react-router-dom](https://reactrouter.com/) | ^6.28.0 | Declarative routing for React applications |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | ^10.0.6 | A library for showing beautiful toast notifications in React |
| [sort-by](https://www.npmjs.com/package/sort-by) | ^1.2.0 | Utility for sorting arrays of objects by property values |

### 📥 Installation

To install all dependencies, run:

```sh
npm install
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/Sadia0920/discount-pro.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=your_firebase_api_key`
`VITE_AUTH_DOMAIN=your_firebase_auth_domain`
`VITE_PROJECT_ID=your_firebase_project_id`
`VITE_STORAGE_BUCKET=your_firebase_storage_bucket`
`VITE_MESSAGING_SENDER_ID=your_firebase_sender_id`
`VITE_APP_ID=your_firebase_app_id`
`VITE_SERVER_URL=your_backend_server_url`





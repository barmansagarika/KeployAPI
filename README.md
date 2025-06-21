# 📚 API Book Manager

A simple web-based Book Manager app built with HTML, CSS, TypeScript, and MySQL (via PHP backend). This app supports basic CRUD operations: Create, Read, and Delete.

---

## 🚀 Features

- Add books with title, author, and year
- View all books
- Delete books
- Uses MySQL database and PHP backend
- Frontend built with TypeScript and HTML/CSS

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, TypeScript
- **Backend**: PHP
- **Database**: MySQL
- **Other**: XAMPP or WAMP for local server

---

## 🖥️ How to Run Locally

### 📦 Step 1: Install Requirements
- Install [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/)

### ⚙️ Step 2: Setup Database
1. Start Apache & MySQL from XAMPP/WAMP
2. Open phpMyAdmin at `http://localhost/phpmyadmin`
3. Create database and table:

```sql
CREATE DATABASE bookdb;
USE bookdb;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  year INT
);
```

### 🧪 Step 3: Run App
1. Place the `mysql-crud-app` folder inside `htdocs/` (XAMPP) or `www/` (WAMP)
2. Open terminal in project folder and compile TypeScript:
   ```
   tsc
   ```
   This will generate `script.js`
3. Open `http://localhost/mysql-crud-app/index.html` in your browser

---

## ✅ Future Improvements

- Edit/update book feature
- Search/filter books
- Form validation & error handling
- Responsive layout

---

## 🙌 Acknowledgements

Built for learning full stack basics using only core web technologies and MySQL.

# 💰 Expense Tracker

A simple and user-friendly **Expense Tracker Web Application** built using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL.

## 🚀 Features

- Add new expenses
- View expense records
- Update expense details
- Delete expenses
- Track expense amounts
- Manage expenses by date
- Responsive web interface
- REST API based backend
- MySQL database integration

## 🛠️ Technologies Used

### Backend
- Java
- Spring Boot
- Spring REST API
- MySQL
- Maven

### Frontend
- HTML5
- CSS3
- JavaScript

### Tools
- Eclipse / IntelliJ IDEA
- MySQL
- Git
- GitHub

## 📂 Project Structure

```text
Expense-Tracker/
├── .mvn/
│   └── wrapper/
│       └── maven-wrapper.properties
├── src/
│   ├── main/
│   │   ├── java/com/app/
│   │   │   ├── Application.java
│   │   │   ├── Expense.java
│   │   │   ├── ExpenseController.java
│   │   │   └── ExpenseRepository.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── script.js
│   │       │   └── style.css
│   │       └── application.properties
│   └── test/
│       └── java/
├── .gitignore
├── .gitattributes
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
```

## ⚙️ Requirements

- Java JDK 17 or later
- MySQL
- Git
- Maven (optional; Maven Wrapper is included)

## 🗄️ Database Setup

Create the database in MySQL:

```sql
CREATE DATABASE expense_tracker;
```

Update `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Replace `YOUR_PASSWORD` with your MySQL password.

## ▶️ How to Run

On Windows, run:

```bash
.\mvnw.cmd spring-boot:run
```

Or, if Maven is installed:

```bash
mvn spring-boot:run
```

## 🌐 Open the Application

After the application starts, open:

```text
http://localhost:8080
```

## 🔗 REST API

Example expense operations:

```text
GET     /expenses
POST    /expenses
PUT     /expenses/{id}
DELETE  /expenses/{id}
```

## 🔄 Application Flow

```text
User
  ↓
HTML / CSS / JavaScript
  ↓
Spring Boot REST Controller
  ↓
Expense Repository
  ↓
MySQL Database
```

## 🎯 Project Objective

This project was created to gain practical experience with:

- Java programming
- Spring Boot
- REST APIs
- MySQL database integration
- HTML, CSS and JavaScript
- CRUD operations
- Git and GitHub

## 📌 Future Improvements

- User authentication and registration
- Expense charts and reports
- Search and filtering
- Improved mobile responsiveness
- PDF/Excel export
- Cloud deployment
- Multiple user accounts

## 👨‍💻 Author

**Rahul N**

BCA Student | Aspiring Java Full Stack Developer

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

## 📄 License

This project is created for learning and educational purposes.

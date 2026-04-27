# Content Broadcasting System –

## Project Overview

This project is a Content Broadcasting System (Backend Only) built using Node.js, Express.js, and PostgreSQL.

It is designed for modern educational institutions where teachers upload digital content (question papers, notices, study materials), which must be approved by the Principal before being broadcast to students via a public API.

The system includes:

- JWT Authentication
- Role-Based Access Control (RBAC)
- Teacher Content Upload
- Principal Approval / Rejection Workflow
- Public Broadcasting API
- Subject-Based Scheduling & Rotation Logic
- Edge Case Handling
- Secure File Upload System

---

# Tech Stack

- Backend: Node.js
- Framework: Express.js
- Database: PostgreSQL
- ORM: Sequelize
- Authentication: JWT
- Password Hashing: bcrypt
- File Upload: multer
- Environment Config: dotenv

---

# Project Structure

```bash
content-broadcasting-system/
│── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── uploads/
│
│── .env
│── server.js
│── package.json
│── README.md
│── architecture-notes.txt
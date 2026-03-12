# Book Management System

A full-stack CRUD application for managing books, built with **Angular 21** (frontend) and **ASP.NET Core Web API (.NET 10)** (backend).

## Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | Angular 21, TypeScript 5.9 |
| Backend  | ASP.NET Core (.NET 10), C# |
| Storage  | In-memory (static list)    |
| Alerts   | SweetAlert2                |

## Project Structure

```
book-management-backend/       # ASP.NET Core Web API
├── Controllers/
│   └── BooksController.cs     # REST API endpoints
├── Models/
│   └── Book.cs                # Book entity
├── Services/
│   └── BookService.cs         # In-memory data service
└── Program.cs                 # App configuration & startup

book-management-frontend/      # Angular SPA
├── src/app/
│   ├── components/
│   │   ├── book-list/         # List all books
│   │   ├── add-book/          # Add new book form
│   │   └── edit-book/         # Edit existing book form
│   ├── models/
│   │   └── book.ts            # Book interface
│   ├── services/
│   │   └── book.service.ts    # HTTP service for API calls
│   ├── app.routes.ts          # Route definitions
│   └── app.config.ts          # App providers
```

## API Endpoints

| Method   | Endpoint          | Description       |
| -------- | ----------------- | ----------------- |
| `GET`    | `/api/books`      | Get all books     |
| `GET`    | `/api/books/{id}` | Get a book by ID  |
| `POST`   | `/api/books`      | Create a new book |
| `PUT`    | `/api/books/{id}` | Update a book     |
| `DELETE` | `/api/books/{id}` | Delete a book     |

## Book Model

| Field             | Type     |
| ----------------- | -------- |
| `id`              | int      |
| `title`           | string   |
| `author`          | string   |
| `isbn`            | string   |
| `publicationDate` | DateTime |

## Frontend Routes

| Route       | Component | Description           |
| ----------- | --------- | --------------------- |
| `/`         | BookList  | View all books        |
| `/add`      | AddBook   | Add a new book        |
| `/edit/:id` | EditBook  | Edit an existing book |

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.dev/) (`npm install -g @angular/cli`)

## Getting Started

### Backend

```bash
cd book-management-backend
dotnet run
```

The API will start at **http://localhost:5204**.

### Frontend

```bash
cd book-management-frontend
npm install
ng serve
```

The app will be available at **http://localhost:4200**.

> **Note:** The backend must be running first since the frontend connects to `http://localhost:5204/api/books`.

## Features

- View all books in a table
- Add new books with form validation
- Edit existing books with pre-populated fields
- Delete books with confirmation dialog (SweetAlert2)
- Success/error notifications
- Empty state message when no books exist

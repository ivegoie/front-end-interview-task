# To-DO App - Front End Interview Task

## Project Overview

Welcome! 😊 This project is a To-Do app built as part of a front-end job interview task. The app allows users to manage their tasks through a clean and responsive interface. It also integrates with the DummyJSON ToDo API to fetch tasks dynamically. Below, you'll find details about the project's setup, features, and development guidelines.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)

## Introduction

This Todo App is designed to help users manage their tasks efficiently. It was developed using Vite with Vanilla JavaScript and TypeScript, and it integrates with the DummyJSON ToDo API to fetch tasks dynamically. The app is responsive and features a user-friendly interface, making it easy to add, edit, and delete tasks.

## Features

- Fetch Tasks: Dynamically fetch tasks from the DummyJSON ToDo API.
- Add Tasks: Easily add new tasks to your todo list.
- Delete Tasks: Remove tasks from your list when completed.
- Responsive Design: The app is optimized for both desktop and mobile devices.
- Local Storage: Persist tasks in the browser's local storage.

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/package-manager) (version 14.x or higher)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ivegoie/front-end-interview-task.git
   ```

2. **Install Dependencies**
   If you're using npm:

   ```bash
   npm install
   ```

   Or with Yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**
   Start the vite development server:

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

## Usage

Once the development server is running, you can view the application in your browser at:

```bash
http://localhost:5173
```

### Fetching Tasks

- Enter number of tasks to fetch DummyJSON tasks in the input field and click the **"Add API Tasks"**

### Adding a Task

- Enter your task in the input field and click the **"Add"** button.

### Deleting a Task

- Click the **"Delete"** button next to the task you wish to remove.

### Completing a Task

- Click the **"Checkbox"** or the Todo Text for completing the task

### Delete All Tasks

- Click the **"Delete All Todos"** to delete all Todos

### Delete Manual Tasks

- Click the **"Delete Manual Tasks"** to delete all manual todos

### Delete API Tasks

- Click the **"Delete API Tasks"** to delete all fetched todos

## Configuration

The application is designed to work out of the box with minimal configuration. However, you can customize the behavior by modifying the TypeScript configuration or Vite settings in tsconfig.json and vite.config.ts, respectively.

## Dependencies

This project relies on the following key dependencies:

- **Vite**: A fast build tool for modern web projects.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **DummyJSON ToDo API**: An API used to fetch tasks dynamically.
- **SCSS**: A superset of the CSS language that allows more freedom and control when designing web apps.

Refer to the `package.json` file for the complete list of dependencies.

## Project Structure

```plaintext
── public               # Static assets
├── src
│   ├── api              # Fetching API
│   ├── components       # Reusable components
│   ├── styles           # SCSS styles
│   ├── main.ts          # Application entry point
│   └── utils            # Utility functions
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata and dependencies
```

Thank you for reviewing my code!

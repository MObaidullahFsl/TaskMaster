# 🗂️ TaskMaster – A Modular To-Do List App

Live Demo: [http://mobaidullahfsl.github.io/TaskMaster/](http://mobaidullahfsl.github.io/TaskMaster/)

---

## 📋 Overview

**TaskMaster** is a powerful yet lightweight to-do list application built using modular JavaScript and webpack. It emphasizes project-based organization, clean code structure, and persistent data storage using the Web Storage API.

Unlike beginner-level to-do list apps, TaskMaster supports:

- Multiple **Projects**
- Richly detailed **To-do items**
- Dynamic **DOM updates**
- Data **persistence via localStorage**

---

## 🛠 Features

- ✅ Create, view, and delete multiple projects
- 📝 Add tasks with:
  - Title
  - Description
  - Due Date
  - Priority
- 🧾 Add notes to each project
- 🔍 Expand a task to view/edit details
- 🗑️ Delete individual tasks
- 💾 Data persistence using `localStorage`
- 🎨 Color-coded priorities
- 📆 Date handling and formatting using `date-fns`

---

## 🧱 Tech Stack

- Vanilla JavaScript (ES6+)
- Webpack (modular bundling)
- HTML / CSS
- Web Storage API (localStorage)
- [date-fns](https://date-fns.org/) – for date formatting and manipulation

---

## 🧩 Code Architecture

TaskMaster is structured to **separate concerns**:

- **App Logic:** Classes like `Project`, `Todo`, and `Note` handle data structures and business logic.
- **UI Modules:** Responsible for DOM interaction and event listeners.
- **Storage Module:** Manages saving and restoring data from `localStorage`.
- **Webpack Bundled:** All modules are combined cleanly for production using webpack.

---

## 💾 Data Persistence

TaskMaster uses `localStorage` to persist user data across sessions. All projects, tasks, and notes are saved when created or modified.

When the app loads:
- It checks for existing data in `localStorage`
- If available, it restores all class-based structures from raw JSON using manual deep-copying and reconstruction

---

## 📂 Folder Structure (Simplified)

```
/dist         → Production build (output by webpack)
/src
  ├── index.js         → App entry point
  ├── app.js           → Main App class
  ├── project.js       → Project class
  ├── todo.js          → Todo class
  ├── note.js          → Note class
  ├── dom.js           → UI manipulation logic
  └── storage.js       → localStorage logic
webpack.config.js       → Webpack configuration
```

---

## 🚀 Getting Started (Development)

```bash
npm install
npm run dev      # Start dev server with live reload
npm run build    # Build for production
npm run deploy   # Push `dist/` to GitHub Pages (gh-pages branch)
```

---

## 🎯 Future Improvements

- Editable checklists within to-dos
- Drag-and-drop task reordering
- Light/dark theme toggle
- Search and filter features

---

## 📸 Inspiration

TaskMaster draws inspiration from popular productivity apps like:

- [Todoist](https://todoist.com/)
- [Things](https://culturedcode.com/things/)
- [Any.do](https://www.any.do/)

---

## 👨‍💻 Author

Made by **Mobaidullah** as a learning project and demonstration of clean, modular frontend design.

---

## 📄 License

MIT License – Free to use and modify.

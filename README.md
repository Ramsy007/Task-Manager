# Task Manager Application

The **Task Manager** is a frontend-only application built using the technologies (ReactJS), styled with **Tailwind CSS**, and utilizes the **Web Browser's Local Storage** for managing and persisting tasks. This project demonstrates effective use of modern web development tools and principles to create a responsive and intuitive task management tool.

---

## 🌟 Key Features

1. **Task Management:**
   - Add, edit, and delete tasks seamlessly.
   - Mark tasks as complete or incomplete.

2. **Local Storage Integration:**
   - Tasks are stored persistently using the web browser's Local Storage, ensuring data retention even after refreshing the page.

3. **Task Filtering:**
   - Filter tasks based on **priority levels**:
     - High Priority
     - Medium Priority
     - Low Priority

4. **Task Searching:**
   - Instantly search tasks by their name.

5. **Task Segregation:**
   - Automatically categorize tasks into:
     - **Overdue Tasks**: Tasks with deadlines that have passed.
     - **Upcoming Tasks**: Tasks with future deadlines.

6. **Responsive Design:**
   - Fully responsive user interface using **Tailwind CSS**, ensuring compatibility across all devices.

7. **Date-Based Segregation:**
   - Tasks are grouped and displayed based on their due dates for better organization.

8. **User-Friendly Interface:**
   - Intuitive navigation and interaction, designed for effortless task management.

---

## 🛠️ Tech Stack

- **Frontend Framework**: ReactJS
- **Styling**: Tailwind CSS
- **Persistence**: Local Storage (Web Browser)
- **Programming Language**: JavaScript

---

## 📂 Project Structure

```plaintext
├── public
│   └── index.html       # Entry point of the application
├── src
│   ├── components       # Reusable components
│   │   ├── TaskForm.js      # Form for adding/editing tasks
│   │   ├── TaskList.js      # Renders the list of tasks
│   │   ├── TaskItem.js      # Task Card
│   ├── styles
│   │   └── tailwind.css     # Custom Tailwind CSS configuration
│   └── App.js               # Root component
├── package.json
└── README.md                # Project documentation

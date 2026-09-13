# Build Your Ideal Development Stack

A modern React project that helps users explore different technologies and build their own perfect development stack.

## About This Project

This project is a technology selection app where users can browse available tools, choose technologies for their stack, and manage their selected items easily. The design is clean, responsive, and focused on a simple user experience.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## Features

1. Browse technology cards from a JSON file and see different tech categories.
2. Add technologies to your personal stack and remove them one by one or all at once.
3. Get a clean UI with empty stack messages, notifications, and a responsive layout.

## React Questions

1. What is JSX, and why is it used in React?

   JSX is a way to write HTML-like code inside JavaScript. It is used in React because it makes UI code easier to read and helps us build components more clearly.

2. What is the difference between props and state?

   Props are data passed from a parent component to a child component. State is data that belongs to a component and can change while the app is running.

3. What does the `useState` hook do, and where did you use it in this project?

   `useState` lets a component store and update data. In this project, I used it to keep track of the selected technologies in the stack section.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

   `useEffect` runs after a component has rendered, so it is useful for loading data from an API or JSON file. In this project, the JSON data is loaded through a promise and `Suspense`, but `useEffect` is the hook commonly used for that kind of data loading job.

5. Why does every item in a `.map()` list need a unique `key` prop?

   The `key` helps React identify each item in the list. If the keys are unique, React can update the list correctly and avoid bugs when items change.

6. What is conditional rendering? Show one place you used it.

   Conditional rendering means showing different content based on a condition. In this project, I used it in the selected technologies panel to show an empty stack message when no technology has been chosen yet.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

   A parent passes data to a child using props. A child sends data back by calling a function that the parent passed down, like the `setSelected` function used here to update the selected stack.

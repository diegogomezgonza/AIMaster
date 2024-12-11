# AIMaster
In this project, I will help you to evaluate AI responses based on real characteristics that I work with. The goal is to provide tools and resources for assessing AI responses effectively, with a focus on key attributes like instruction following, truthfulness, writing style, and overall quality.

# Technologies Used
1. React
React is used as the frontend framework to build the user interface. React allows for creating interactive UIs with ease and provides a component-based architecture for managing the view layer. It’s fast, efficient, and works well for building single-page applications (SPA) like AIMaster.
Vite is used as the build tool for the React app, providing fast development environments and optimized production builds.
2. Flask
Flask is the Python web framework used for the backend API. It provides a simple way to handle HTTP requests and routes. In this project, Flask serves as the bridge between the frontend (React) and the backend, handling any server-side logic and serving the necessary data.
It helps expose RESTful API endpoints that the React app can interact with to get dynamic data or perform any necessary calculations.
3. Tailwind CSS
Tailwind CSS is a utility-first CSS framework used to style the application. With its flexible and customizable classes, it allows for rapid UI development without writing custom CSS for each component. Tailwind helps in creating a responsive, clean, and modern design.
Tailwind’s utility classes are applied directly in the JSX elements to style the components, enabling a faster and more efficient development process.
4. React Router
React Router is used for handling the routing within the React application. It allows us to map different URLs to specific React components. In this project, it’s used to navigate between pages, including the /api/hola route for displaying specific content.
5. JavaScript (ES6+)
The application is written in modern JavaScript (ES6+), utilizing features such as arrow functions, async/await, template literals, and modules for better code maintainability and readability.
6. JSON
JSON is used for data interchange between the backend (Flask API) and the frontend (React). The API returns data in JSON format, and React consumes that data to update the UI dynamically.
Features
# AI Response Evaluation
AIMaster allows you to assess AI responses based on four key characteristics:

Instruction Following: How well does the AI follow the instructions it is given?
Truthfulness: Is the information provided by the AI accurate and truthful?
Writing Style: Does the AI exhibit a readable and coherent writing style?
Overall Quality: A comprehensive evaluation of the AI's response quality.
Responsive Design: Thanks to Tailwind CSS, the application is fully responsive, ensuring a good user experience on both desktop and mobile devices.

React + Flask Architecture: The frontend is built using React, while Flask serves the backend API. This combination makes the project highly scalable and maintainable.


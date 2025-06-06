# Collectible Card Game Frontend

This is a frontend-only React application that simulates the experience of opening a pack of collectible cards. It's built with Vite, React (using functional components and hooks), and styled with TailwindCSS. Routing is handled by React Router DOM.

## Project Structure

-   `public/`: Static assets.
-   `src/`: Source code.
    -   `assets/`: Application-specific static assets (images, etc.).
    -   `components/`: Reusable React components.
    -   `pages/`: Page-level components (`HomePage.jsx`, `PackPage.jsx`).
    -   `App.jsx`: Main application component with routing setup.
    -   `main.jsx`: Application entry point.
    -   `index.css`: Global styles, including TailwindCSS imports.
-   `tailwind.config.js`: TailwindCSS configuration.
-   `postcss.config.js`: PostCSS configuration.
-   `vite.config.js`: Vite configuration.
-   `package.json`: Project dependencies and scripts.

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended, due to some dependencies potentially requiring newer versions. The environment this was developed in used v18.19.1, and `react-router-dom` was pinned to v6 for compatibility).
-   npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd collectible-card-game-frontend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Start the Vite development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Features

-   **Home Page:** A clean and modern landing page with a button to "Open Your Pack".
-   **Pack Opening Page:** Navigated to from the home page, this page will display the opened cards (currently shows placeholders).
-   **Routing:** Uses React Router DOM for navigation between pages.
-   **Styling:** Uses TailwindCSS for a utility-first CSS workflow.

## Future Enhancements

-   Actual card designs and images.
-   Animation for the pack opening sequence.
-   More complex card generation logic.

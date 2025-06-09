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

### Running with Docker

This application can also be built and run using Docker.

1.  **Build the Docker image:**
    Make sure you have Docker installed and running. Navigate to the project root directory (where the `Dockerfile` is located) and run:
    ```bash
    docker build -t collectible-card-game-frontend .
    ```
    This will build the image and tag it as `collectible-card-game-frontend`.

2.  **Run the Docker container:**
    Once the image is built, you can run it as a container:
    ```bash
    docker run -d -p 8080:80 --name ccard-game-app collectible-card-game-frontend
    ```
    -   `-d`: Runs the container in detached mode.
    -   `-p 8080:80`: Maps port 8080 on your host machine to port 80 in the container (where Nginx is serving the app). You can change `8080` to any other available port on your host.
    -   `--name ccard-game-app`: Assigns a name to the running container for easier management.
    -   `collectible-card-game-frontend`: The name of the image to run.

3.  **Access the application:**
    Open your browser and navigate to `http://localhost:8080` (or whichever host port you chose).

4.  **To stop the container:**
    ```bash
    docker stop ccard-game-app
    ```

5.  **To remove the container:**
    ```bash
    docker rm ccard-game-app
    ```

## Features

-   **Home Page:** A clean and modern landing page with a button to "Open Your Pack".
-   **Pack Opening Page:** Navigated to from the home page, this page will display the opened cards (currently shows placeholders).
-   **Routing:** Uses React Router DOM for navigation between pages.
-   **Styling:** Uses TailwindCSS for a utility-first CSS workflow.

## Future Enhancements

-   Actual card designs and images.
-   Animation for the pack opening sequence.
-   More complex card generation logic.

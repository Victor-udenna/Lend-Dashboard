# Next.js Project with, SCSS, Atomic Design, and IndexedDB

This project is a Next.js application built using the Atomic Design methodology, SCSS for styling, and IndexedDB for offline data storage.

## Project Structure

This project uses the Atomic Design methodology, which breaks down UI components into five categories:

1. **Atoms** – The smallest building blocks (e.g., buttons, inputs).
2. **Molecules** – Groups of atoms that work together.
3. **Organisms** – Complex groups of molecules that form distinct sections of the UI .
4. **Templates** – Page layouts composed of organisms, providing structure.
5. **Pages** – Fully fleshed-out templates, forming the full application view.

## Features

- **Next.js** – For server-side rendering, static site generation, and routing.
- **Atomic Design** – A component-driven approach that ensures UI scalability and reusability.
- **SCSS** – Allows the use of nested styles and variables for easier styling.
- **IndexedDB** – A client-side database to store data for offline use and to improve performance by reducing server requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository:

   ```bash
   git clone <https://github.com/Victor-udenna/Lend-Dashboard.git>
   cd dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application at [http://localhost:3000](http://localhost:3000).

## Project Setup

### Atomic Design Directory Structure

- **`/src/components/atoms`** – Basic components like buttons, labels, and inputs.
- **`/src/components/molecules`** – Grouped components, such as form elements and card items.
- **`/src/components/organisms`** – Larger building blocks, such as headers, footers, and sections.
- **`/src/components/templates`** – Layout components defining the structure of each page.
- **`/src/pages`** – Page components in Next.js (handled by Next.js for routing).

### Styling with SCSS

Each component has a corresponding SCSS file for modular styling, following the same folder structure as components. Global styles and variables are stored in `styles/globals.scss`.

### Data Storage with IndexedDB

IndexedDB is used to store data offline and enhance performance. The IndexedDB instance is managed using a custom hook (`useIndexedDB`) for ease of use across components.

## Available Scripts

- **`npm run dev`** – Starts the development server.
- **`npm run build`** – Builds the application for production.
- **`npm start`** – Runs the production server.
- **`npm run lint`** – Runs ESLint to check for code issues.
- **`npm run test`** – Runs tests.

## Contributing

If you would like to contribute, please fork the repository and make changes as you'd like. Contributions are highly appreciated!

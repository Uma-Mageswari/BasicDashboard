# React Dashboard

A React-based dashboard application utilizing Material-UI and TypeScript. This project serves as a flexible and customizable template for building web dashboards with various charting and UI components.

## Features

- **Material-UI (MUI)** for building responsive and modern UI components
- **TypeScript** for static type checking
- **React Hooks & Functional Components** for cleaner code and better performance
- **Charting**: Includes integration with `@mui/x-charts` for visualizing data
- **ESLint** with TypeScript for consistent coding style
- **Pre-configured Husky & lint-staged** for pre-commit linting
- **GitHub Pages Deployment** for easy hosting and previewing
- **Responsive Layout** designed with Material-UI's Grid and Flexbox

## Project Setup

### Prerequisites

Make sure you have `Node.js` and `npm` installed. You can check your installed versions using:

```bash
node -v
npm -v
```

### Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/your-username/react-dashboard.git
cd react-dashboard
```

### Install the dependencies:

```bash
npm install
```

### Development

To start the development server and view the project locally, run:

```bash
npm start
```

This will start the application and open it in your browser at `http://localhost:3000`.

### Linting

To run the linter and check for issues:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

### Testing

Run tests with:

```bash
npm test
```

This will run the tests once. To watch the tests for changes, simply run:

```bash
npm test -- --watchAll=true
```

### Build for Production

To create a production-ready build:

```bash
npm run build
```

This will create a `build/` directory with optimized files ready for deployment.

### Deployment to GitHub Pages

To deploy the app to GitHub Pages:

```bash
npm run deploy
```

Make sure that your repository is already linked to GitHub Pages and you have the correct settings in place (i.e., your `homepage` field in `package.json`).

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically run ESLint on staged `.tsx` files before committing. If you modify any `.tsx` file, the linter will automatically run before commit.

---

## Folder Structure

```bash
/src
    /components        # Contains React components like Dashboard, Header, Footer, etc.
    /reducers          # Contains Redux or useReducer related files (e.g., authReducer)
    /contexts          # Contains context providers (e.g., ThemeContext)
    /styles            # CSS or MUI styling related files
    /theme             # Custom MUI themes and color palette
/public
    index.html         # The HTML template
    /assets            # Images or static files

```


## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Material-UI (MUI)**: React component library for building modern UIs
- **TypeScript**: Adds type safety and development efficiency
- **React-scripts**: For bundling and building the React app
- **gh-pages**: For deploying the app to GitHub Pages

## Development Tools

- **ESLint**: For linting and ensuring code consistency
- **Husky**: For Git hooks management
- **lint-staged**: For running linting on staged files before commit

## Contributing

We welcome contributions to improve the project. If you have an idea, fork the repository and make a pull request. Please ensure your code passes all linting and testing before submitting.

## Commands Overview

### `npm start`

Starts the React development server. You can view the project at `http://localhost:3000`.

### `npm run build`

Builds the project for production. The build files are output to the `build/` directory.

### `npm run test`

Runs the tests once. You can also add the `--watchAll=true` flag to watch for changes.

### `npm run lint`

Runs ESLint to check for any issues with your code.

### `npm run lint:fix`

Runs ESLint and automatically fixes any issues that can be fixed.

### `npm run deploy`

Deploys the application to GitHub Pages.

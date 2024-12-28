# @code-companion/react-component-library-template

This repository serves as a template for creating and maintaining a modern React component library. It includes tools and configurations to help you focus on building high-quality components while ensuring the library is easy to use, maintain, and extend.

## Features

- **TypeScript Support**: Write components with type safety and better developer experience.
- **Storybook Integration**: Document and visually test components with Storybook.
- **ESM & CJS Builds**: Supports modern JavaScript and legacy environments with dual-module outputs.
- **Automated Testing**: Preconfigured Vitest and React Testing Library for unit and snapshot tests.
- **Code Quality & Formatting**: Biome.js configured to ensure consistent formatting and code quality.
- **CSS Modules for Styling**: Components are styled using CSS Modules for scoped and maintainable styles.
- **Tree-shaking Ready**: Ensures unused code is not bundled for efficient builds.
- **CI/CD Ready**: Includes GitHub Actions for testing, linting, and releasing.

## Styling

The library uses CSS Modules as its primary styling solution. Style overrides can be achieved using:

1. **CSS Variables**: Components expose overridable CSS variables for customization.
2. **`className` Prop**: Pass a custom class name to components to apply additional styles.

A list of all overridable CSS variables is documented in the `.mdx` file next to each component in the `src/components` directory.

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### Development

Run the development server to work on components:

```bash
npm run storybook
```

This starts the Storybook server, allowing you to view and test components in isolation.

### Building the Library

To compile the library for production:

```bash
npm run build
```

The output will be generated in the `build` folder, ready for publishing to npm. The build system only exports `index` files located in the source directory. This structure ensures a proper ESM file layout in the `build` directory, enabling efficient tree-shaking when using the library.

### Testing

Run tests with:

```bash
npm test   # Runs the test suite using Vitest
```

Watch mode for tests:

```bash
npm run test:watch   # Runs tests in watch mode using Vitest
```

### Code Quality & Formatting

Biome.js handles linting and formatting:

Run commands for formatting and linting:

```bash
npm run format   # Formats the code
npm run lint     # Lints the code
```

## Usage

1. Install your library from npm (or use a local path during development).
2. Import components and use them in your application:

```tsx
import { MyComponent } from 'my-library';

const App = () => (
  <MyComponent prop="value" />
);

export default App;
```

## Project Structure

```plaintext
src/
├── components/    # Individual component folders
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── index.ts       # Library entry point
.storybook/        # Storybook configuration
.build/             # Build output (ignored in version control)
```

## Publishing

1. Update the version in `package.json`.
2. Run the following command to publish:

```bash
npm publish
```

Ensure you have the necessary permissions and are logged in to npm.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run tests and Biome.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Happy coding! 🎉


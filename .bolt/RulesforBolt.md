The Complete Rules.md File
text
# Rules for bolt.new Expo React Native Project

## Project Structure Guidelines

### Directory Structure
- Follow a consistent and organized directory structure:
src/
├── assets/ # Images, fonts, and other static assets
├── components/ # Reusable UI components
│ ├── common/ # Shared components used across features
│ └── feature/ # Feature-specific components
├── navigation/ # Navigation configuration
├── screens/ # Screen components
├── services/ # API services and external integrations
├── store/ # State management (Redux, Context, etc.)
├── styles/ # Global styles, themes, and style utilities
├── utils/ # Utility functions and helpers
└── constants/ # App-wide constants

text
- Do not create duplicate directories or nested directories with the same purpose
- Maintain clear separation of concerns between directories
- Place each component in its own file with a consistent naming convention

### File Naming Conventions
- Use PascalCase for component files (e.g., `Button.jsx`, `HomeScreen.jsx`)
- Use camelCase for utility files (e.g., `apiService.js`, `dateUtils.js`)
- Use kebab-case for asset files (e.g., `background-image.png`)
- Ensure file names clearly describe their purpose and content
- Do not create files with generic names that don't indicate their function

## Dependency Management

### Package Installation
- Use `expo install` for adding Expo-compatible packages
- When adding non-Expo packages, verify compatibility with the current Expo SDK version
- Do not install multiple packages that serve the same purpose
- Avoid installing deprecated or unmaintained packages
- Specify exact versions for critical dependencies to prevent unexpected updates

### Version Control
- Lock dependency versions to prevent conflicts:
"dependencies": {
"react": "18.2.0",
"react-native": "0.72.6",
"expo": "~49.0.0"
}

text
- Ensure React and React Native versions are compatible with the Expo SDK version
- Do not mix different major versions of related packages

### Conflict Resolution
- When dependency conflicts occur:
1. Check for compatibility with Expo SDK
2. Use `npx expo-doctor` to identify and fix version mismatches
3. Use `expo install --fix` to resolve dependency issues
4. If necessary, use `--legacy-peer-deps` only as a last resort
- Do not force install incompatible packages

## Code Quality Standards

### Component Structure
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Limit component file size (max ~300 lines)
- Use functional components with hooks instead of class components
- Implement proper prop validation using PropTypes or TypeScript

### Performance Optimization
- Use `React.memo()` for pure functional components
- Implement proper list rendering with `FlatList` or `SectionList`
- Optimize image assets (use appropriate formats and sizes)
- Avoid unnecessary re-renders by properly managing state
- Use lazy loading for screens and heavy components

### Error Prevention
- Implement proper error boundaries around key components
- Use try/catch blocks for async operations
- Validate all user inputs and API responses
- Implement proper null/undefined checks
- Use TypeScript or PropTypes for type checking

## Expo-Specific Guidelines

### Expo SDK Usage
- Use Expo SDK features instead of native modules when possible
- Follow Expo's recommended practices for handling permissions
- Use Expo's asset system for managing static resources
- Implement proper app lifecycle handling

### Build Configuration
- Keep the app.json/app.config.js configuration clean and organized
- Set appropriate permissions in app.json
- Configure proper splash screen and icon assets
- Use environment variables for sensitive configuration

## Strict Quality Enforcement

- Do not generate code with syntax errors or invalid imports
- Do not create circular dependencies between modules
- Do not use deprecated APIs or features
- Ensure all files have proper exports
- Maintain consistent code style throughout the project
- Implement proper error handling for all async operations
- Ensure all components are properly documented with comments
Key Benefits of This Rules File
Prevents Dependency Conflicts
The rules file ensures bolt.new uses proper Expo dependency management practices . It emphasizes using expo install instead of npm install for Expo-compatible packages and includes specific version locking guidelines to prevent React Native version mismatches .

Maintains Clean Directory Structure
Based on React Native best practices, the rules establish a clear domain-based organization structure that prevents duplicate directories and maintains separation of concerns . This approach is particularly effective for larger projects and ensures scalability.

Enforces Quality Standards
The file includes strict quality enforcement rules that prevent common React Native errors like ReferenceError, TypeError, and undefined variable issues . It mandates proper error handling, null checks, and type validation to maintain code stability.

Optimizes for Bolt.new Environment
The rules are specifically tailored for bolt.new's AI-assisted development environment . They include guidelines for managing project size, preventing the "project too large" error, and maintaining focus on core functionality .
# Contributing to MU/TH/UR 6000 Cards

Thank you for your interest in contributing! This project welcomes contributions from the community.

## Code of Conduct

Be respectful and constructive. This is a fun project inspired by the Alien franchise - let's keep it enjoyable for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Home Assistant version
   - Browser and version

### Suggesting Features

1. Check if the feature has been suggested in [Issues](https://github.com/loryanstrant/ha-MU-TH-UR-6000-cards/issues)
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Examples or mockups if possible
   - Reference to Alien franchise aesthetics if relevant

### Code Contributions

#### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ha-MU-TH-UR-6000-cards.git
   cd ha-MU-TH-UR-6000-cards
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Workflow

1. Make your changes in the `src/` directory
2. Follow the existing code style
3. Run linter:
   ```bash
   npm run lint
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Test your changes in Home Assistant:
   - Copy `dist/mu-th-ur-6000-cards.js` to your HA `config/www/` directory
   - Clear browser cache
   - Test all affected cards

#### Code Style Guidelines

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Follow existing naming conventions
- Keep functions small and focused
- Comment complex logic
- Use CSS custom properties for theming

#### Design Guidelines

- Maintain the green monochrome aesthetic (#00ff41)
- Keep the terminal/CRT look
- Use uppercase for headers and labels
- Preserve scanline effects
- Ensure accessibility (contrast, readability)
- Stay true to the Alien franchise aesthetic

#### Commit Messages

Use clear, descriptive commit messages:
- `feat: Add new card type for...`
- `fix: Resolve issue with...`
- `docs: Update README with...`
- `style: Improve styling for...`
- `refactor: Simplify code in...`

#### Pull Request Process

1. Update documentation if needed
2. Add examples for new features
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Create a pull request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots of changes
   - Testing details

### Documentation

Improvements to documentation are always welcome:
- Fix typos or clarify instructions
- Add examples
- Improve installation guide
- Add troubleshooting tips

## Project Structure

```
ha-MU-TH-UR-6000-cards/
├── src/                    # Source files
│   ├── base-card.js       # Base card class and styles
│   ├── status-card.js     # Status card implementation
│   ├── sensor-card.js     # Sensor card implementation
│   ├── button-card.js     # Button card implementation
│   ├── text-card.js       # Text card implementation
│   └── mu-th-ur-6000-cards.js  # Main entry point
├── dist/                   # Built files (committed for HACS)
├── examples/              # Example configurations
├── .github/workflows/     # CI/CD workflows
├── test.html              # Local test page
├── package.json           # Dependencies and scripts
├── rollup.config.js       # Build configuration
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # Contribution guidelines
└── README.md             # Main documentation
```

## Design Resources

- [Typeset in the Future - Alien](https://typesetinthefuture.com/2014/12/01/alien/)
- [Weyland-Yutani Theme](https://github.com/loryanstrant/ha-weylandyutani)
- Alien (1979) MU/TH/UR 6000 screen references

## Questions?

Feel free to open an issue for questions or join the discussion in existing issues.

---

*"Crew Expendable" - MU/TH/UR 6000*

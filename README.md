# Student Services Portal

Chapter 1 laboratory project: establishing a professional TypeScript, GitHub,
and AI-assisted development workflow for a University Student Services Portal.

## Requirements

- Node.js and npm
- Git
- Visual Studio Code or another approved editor
- GitHub account
- Instructor-approved AI coding assistant, if available

## Installation

```bash
npm install
```

## Run the project

```bash
npm run build
npm start
```

The sample program formats a student, displays status labels, demonstrates both
generic API response shapes, and validates three unknown external values.

## Quality checks

```bash
npm run check
npm run lint
npm run format
npm run format:check
```

`isStudent` accepts `unknown` and narrows it only after checking every required
field. The `Student` interface provides compile-time safety, but it cannot
validate data received from an API at runtime.

## Development workflow

1. Create or select a GitHub Issue.
2. Create a focused feature branch, for example `feature/student-status`.
3. Ask, understand, review, modify, test, and verify any AI recommendation.
4. Run the quality checks before committing.
5. Create a meaningful commit, push the branch, and open a Pull Request.
6. Address review feedback, merge after approval, and close the Issue.

## AI usage policy

AI tools may assist development. All AI-generated code must be reviewed,
understood, modified when necessary, tested, and verified against official
documentation before it is committed. The student remains responsible for the
final code and must document accepted, modified, and rejected recommendations.

See [docs/ai-review.md](docs/ai-review.md) for the review record template.

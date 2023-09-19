# Turborepo testing with Vercel

## Prerequisites

Make sure to have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [git](https://git-scm.com/downloads)

## Installation

```bash
pnpm install
```

## Running the application

```bash
pnpm dev
```

## Workshop part 1

### Task 1

- Expand the `turbo.json` with a test script.
- Ensure that caching is enabled.
- Specify that changes in a `.tsx` or `.ts` file should result in a cache miss.
- Run the pipeline using `pnpm test`.
- Run the pipeline again; it should be much faster, indicating a `FULL TURBO` mode.
- Make a modification in a `.tsx` or `.ts` file.
- Run the pipeline again; this should result in a cache miss, causing the test to run again.

### Task 2

- The monorepo contains 2 applications:
  - `pizza-shop`
  - `test-automation`
- The `test-automation` application contains a contact page that is not present in the other application.
- Write an E2E Playwright test to navigate to the contact page and click on the button.
- Execute this test only for the `test-automation` application.
- Run the test by running `pnpm dev` and `pnpm e2e` in separate terminal screens.

### Task 3 (Bonus)

- Write a `Vitest` component test for the other UI elements.

### Task 4 (Bonus)

- Run only the E2E tests for the `pizza-shop` application:
  [Filtering E2E Tests](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)

## Workshop part 2

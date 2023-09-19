# Monorepo testing with Vercel

## Prerequisites

Make sure to have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [git](https://git-scm.com/downloads)

> For part 2 of the workshop with Vercel, it's best to fork this repository

## Installation

```bash
pnpm install
```

## Running the application

```bash
pnpm dev
```

## Workshop part 1

### Task 1 (turbo.json)

- Expand the `turbo.json` with a test script.
- Ensure that caching is enabled.
- Specify that changes in a `.tsx` or `.ts` file should result in a cache miss.
- Run the pipeline using `pnpm test`.
- Run the pipeline again; it should be much faster, indicating a `FULL TURBO` mode.
- Make a modification in a `.tsx` or `.ts` file.
- Run the pipeline again; this should result in a cache miss, causing the test to run again.

> https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks

### Task 2 (Playwright)

- The monorepo contains 2 applications:
  - `pizza-shop`
  - `test-automation`
- The `test-automation` application contains a contact page that is not present in the other application.
- Write an E2E Playwright test to navigate to the contact page and click on the button.
- Execute this test only for the `test-automation` application.
- Run the test by running `pnpm dev` and `pnpm e2e` in separate terminal screens.

### Task 3 (Bonus - Filtering)

- Run only the E2E tests for the `pizza-shop` application:

  > https://turbo.build/repo/docs/core-concepts/monorepos/filtering

### Task 4 (Bonus - Atomic design)

- Extract the `button` element from `apps/test-automation/src/app/contact/page.tsx` into a shared `atoms` UI element.

### Task 5 (Bonus - Vitest)

- Write a `Vitest` / `react-testing-library` component test for the other UI elements.

## Workshop part 2

### Task 6 (Setup Vercel / GitHub)

- Make sure you have the base repository forked, or pushed to your personal GitHub.
- Create a Vercel account and log in to the dashboard via GitHub.
- Add a new project from the top right.
- If you logged in via GitHub and you have the repository on that account you can simply import `monorepo-testing-workshop`
- Vercel will recognize its a `NextJS` application, deploy it
- Import / deploy both the `pizza-shop` as the `test-automation` application
- Make a code change, and push it to the `main` branch, notice how both applications on Vercel getting a new deployment automatically.

### Task 7 (Github actions Vercel preview)

- Uncomment the GitHub pipeline in `.github/workflows/playwright-ta.yml`
- Complete the pipeline by waiting for the deployment of the `test-automation` app
- Use the following action

> https://github.com/patrickedqvist/wait-for-vercel-preview

### Task 8 (Bonus - Github actions Vercel preview)

- Create a pipeline for the `pizza-shop` app

## Getting Started

Install dependencies:

```bash
npm install
```

Build project:

```bash
npm run build
```

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Structure Overview

This document outlines the structure of the project, explaining the purpose of each folder and file.

## Root Directory

- **`constants.ts`**: Contains constant values used throughout the application, such as `PAGE_LIMIT` and `INITIAL_PAGE`.
- **`types.ts`**: Defines TypeScript types and interfaces used in the application, such as `IArticle` and `IArticleListProps`.
- **`jest.config.js`**: Configuration file for Jest, a JavaScript testing framework.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Contains metadata about the project and its dependencies.

## `components/`

Contains reusable UI components.

### `ArticleList/`

Component for displaying a list of articles.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `ArticleList` component.
  - **`ArticleList.test.tsx`**: Test file for the `ArticleList` component.

### `Card/`

Component for displaying individual article cards.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `Card` component.
  - **`Card.test.tsx`**: Test file for the `Card` component.

### `Header/`

Component for the header section of the application.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `Header` component.
  - **`Header.test.tsx`**: Test file for the `Header` component.

### `Footer/`

Component for the footer section of the application.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `Footer` component.
  - **`Footer.test.tsx`**: Test file for the `Footer` component.

### `Logo/`

Component for displaying the logo.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `Logo` component.
  - **`Logo.test.tsx`**: Test file for the `Logo` component.

### `InfiniteScroll/`

Component for implementing infinite scrolling.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `InfiniteScroll` component.
  - **`InfiniteScroll.test.tsx`**: Test file for the `InfiniteScroll` component.

## `containers/`

Contains higher-level components that manage state and logic.

### `LoadMoreError/`

Component for handling load-more errors.

- **`index.tsx`**: Main component file.
- **`tests/`**: Contains tests for the `LoadMoreError` component.
  - **`LoadMoreError.test.tsx`**: Test file for the `LoadMoreError` component.

## `store/`

Contains Redux store configuration and slices.

### `features/`

#### `articles/`

- **`articlesSlice.ts`**: Redux slice for managing articles state.
- **`articlesSelector.ts`**: Selectors for accessing articles state.
- **`tests/`**: Contains tests for the articles slice and selectors.
  - **`articlesSlice.test.ts`**: Test file for the articles slice.
  - **`articlesSelector.test.ts`**: Test file for the articles selectors.

#### `notFound/`

- **`notFoundSlice.ts`**: Redux slice for managing `notFound` state.
- **`notFoundSelector.ts`**: Selectors for accessing `notFound` state.
- **`tests/`**: Contains tests for the `notFound` slice and selectors.
  - **`notFoundSlice.test.ts`**: Test file for the `notFound` slice.
  - **`notFoundSelector.test.ts`**: Test file for the `notFound` selectors.

#### `pagination/`

- **`paginationSlice.ts`**: Redux slice for managing pagination state.
- **`paginationSelector.ts`**: Selectors for accessing pagination state.
- **`tests/`**: Contains tests for the pagination slice and selectors.
  - **`paginationSlice.test.ts`**: Test file for the pagination slice.
  - **`paginationSelector.test.ts`**: Test file for the pagination selectors.

### `store.ts`

Main Redux store configuration file.

## `pages/`

Contains Next.js pages.

### `api/`

API routes.

- **`articles/`**: API route for fetching articles.
  - **`route.ts`**: Main API route file.
  - **`tests/`**: Contains tests for the API route.
    - **`route.test.ts`**: Test file for the API route.

### `nieuws/`

News pages.

- **`sport/`**: Sport news page.
  - **`index.tsx`**: Main page file for sport news.

## `utils/`

Contains utility functions.

- **`generateArticleUrl.ts`**: Utility function for generating article URLs.
- **`tests/`**: Contains tests for utility functions.
  - **`generateArticleUrl.test.ts`**: Test file for the `generateArticleUrl` utility function.

## `cypress/`

Contains Cypress end-to-end tests.

### `e2e/`

End-to-end test files.

- **`rtl-sport-page/`**: Tests for the sport news page.
  - **`rtl-sport-page.cy.js`**: Cypress test file for the sport news page.

### `fixtures/`

Contains fixture data for tests.

- **`articles.json`**: Fixture file containing sample articles data.

### `support/`

Contains support files for Cypress.

- **`commands.js`**: Custom Cypress commands.
- **`index.js`**: Cypress support file.

---

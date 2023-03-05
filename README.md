# Book Shop

https://d1pcilzlaus1qs.cloudfront.net

## Development Histroy:

### Task 2: Automate Deployment by creating all infrastructure
Tags: `AWS S3`, `Cloudformation`, `serverless`, `plugins: serverless-finch, serverless-single-page-app-plugin`

### Task 3: connect existed UI with 'product-service' response
Tags: `AWS Lambda`, `Api Gateway`

### Task 4: integrate 'product-service' with DynamoDB storage
Tags: `DynamoDB`



# Here comes default Readme of this project

This is Client for Book-shop  project for nodejs-aws mentoring program.

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Main scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `client:deploy`

Deploy the project build from `dist` folder to configured in `serverless.yml` AWS S3 bucket with or without confirmation.

### `cloudfront:update:build:deploy`

Combination of `cloudfront:setup` and `cloudfront:build:deploy` commands with or without confirmation.

### `serverless:remove`

Remove an entire stack configured in `serverless.yml` via CloudFormation.

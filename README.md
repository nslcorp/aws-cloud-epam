# React-shop-cloudfront


# Section for home task module 2:


(later it will be ovverided and made a good Dock stylish)


### Task 2.1: Manual Deployment
1. Files manually uploaded to bucket:
   module-2-app-1-initial-react-app

2. Enabled static website hosting property:
   http://module-2-app-1-initial-react-app.s3-website.eu-central-1.amazonaws.com/


### Task 2.2 Automated Deployment with “serverless-finch plugin”
Deployed to bucket:
module-2-app-2-react-epam-template

Backed URL is closed by bucket policy:
http://module-2-app-2-react-epam-template.s3-website.eu-central-1.amazonaws.com/

Hosted using CloudFront:
https://d3tokh7e7fhqo0.cloudfront.net/

### Task 2.3 Automate Deployment by creating all infrastructure

was used:
- CloudFormation
-   serverless-finch plugin
-  serverless-single-page-app-plugin

Git:
https://github.com/nslcorp/aws-react-ecomerce

CloudDistribution:
https://d1pcilzlaus1qs.cloudfront.net

Static web site hosting link:
(But this link is not unable as Bucket Policy but the task disallow to host site from bucket directly. Just show that is really works)
http://aws-react-ecomerce-backet.s3-website.eu-central-1.amazonaws.com






# Here comes default Readme of this project


This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

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

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

### `client:deploy`, `client:deploy:nc`

Deploy the project build from `dist` folder to configured in `serverless.yml` AWS S3 bucket with or without confirmation.

### `client:build:deploy`, `client:build:deploy:nc`

Combination of `build` and `client:deploy` commands with or without confirmation.

### `cloudfront:setup`

Deploy configured in `serverless.yml` stack via CloudFormation.

### `cloudfront:domainInfo`

Display cloudfront domain information in console.

### `cloudfront:invalidateCache`

Invalidate cloudfront cache.

### `cloudfront:build:deploy`, `cloudfront:build:deploy:nc`

Combination of `client:build:deploy` and `cloudfront:invalidateCache` commands with or without confirmation.

### `cloudfront:update:build:deploy`, `cloudfront:update:build:deploy:nc`

Combination of `cloudfront:setup` and `cloudfront:build:deploy` commands with or without confirmation.

### `serverless:remove`

Remove an entire stack configured in `serverless.yml` via CloudFormation.

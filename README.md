# Example React App with Sentry Integration

This is an example integration of Sentry with React.

## Setup

- Clone the project
- **Replace [the DSN in this project](https://github.com/cstavitsky/example-react-app-with-sentry/blob/main/src/index.js#L10) with your own Sentry DSN (sign up at http://sentry.io if you don't have an account and DSN)**. If you're unsure what a DSN is, or where to find it, [here's some info](https://docs.sentry.io/product/sentry-basics/dsn-explainer/)
- `cd` into the project directory and run `npm start`
- On the page that loads, click the button to trigger an error.

## Error Monitoring

After triggering an error, navigate to Sentry's 'Issues' page (link in left-hand column) to see reported errors:

![Screen Shot 2021-05-13 at 7 22 19 PM](https://user-images.githubusercontent.com/12092849/118204344-a4ff9380-b423-11eb-8bfe-6fa2e2cbad77.png)

## Performance Monitoring

After loading the page, navigate to Sentry's 'Performance' (link in left-hand column) to see page load performance:

![Screen Shot 2021-05-13 at 7 38 17 PM](https://user-images.githubusercontent.com/12092849/118204342-a3ce6680-b423-11eb-9ccc-1876ecb3f9ea.png)



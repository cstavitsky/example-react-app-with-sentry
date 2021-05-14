import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://7fa2c92502c4493cae08fa5808d1b0b1@o660004.ingest.sentry.io/5764191",
  // BrowserTracing allows automatic page load capturing for performance
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // 1.0 ensures every transaction will be sent to Sentry for performance monitoring.
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web'
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web'
import { registerInstrumentations } from '@opentelemetry/instrumentation';

const backendUrlPattern = new RegExp(`^${process.env.REACT_APP_BACKEND_URL}.*$`);

// const sdk = new HoneycombWebSDK({
//   debug: true,
//   apiKey: 'hcaik_01j0jwwwvay9by1e2d8129977sjkbahqfwfha3wy61wp7ykavxgq8da70d',
//   serviceName: 'frontend',
//   instrumentations: [getWebAutoInstrumentations()],
//   webVitalsInstrumentationConfig: {
//     vitalsToTrack: []
//   }
// })
// sdk.start()
 

const el_main = document.getElementsByTagName('main')[0];
const root = ReactDOM.createRoot(el_main);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

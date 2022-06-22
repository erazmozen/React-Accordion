import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accordion from './components/Accordion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accordion
    title="What is Lorem Ipsum?"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />
    <Accordion
    title="What is Lorem Ipsum?"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />
    <Accordion
    title="What is Lorem Ipsum?"
    content="
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </br>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </br>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    "
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

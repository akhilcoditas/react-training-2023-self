import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    {/* In case of  functional component what react does giving example;
      const html =  App({}) and pass blank object to it because our App component does not take any parameters*/}
    <App />

    {/* In case of  class component what react does giving example;
      const html =  new App({}) and pass blank object to for default constructor AppComponent */}

  </React.StrictMode>,
)

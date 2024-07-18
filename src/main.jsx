import React from 'react'
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello, world react</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

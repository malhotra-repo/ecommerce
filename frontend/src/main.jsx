import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/app.store.js'

// enable dark mode globally
if (typeof document !== 'undefined') {
 document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <App />
 </Provider>
)

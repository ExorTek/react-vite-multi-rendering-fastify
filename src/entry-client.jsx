import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
process.env.NODE_ENV === 'development' && console.log(
  'Client-side React code has been loaded and executed.',
)

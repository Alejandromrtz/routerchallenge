import { BrowserRouter, Link} from 'react-router-dom'

// the pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Hello Welcome to the party</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <footer>
        
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App

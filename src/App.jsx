import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart'
import { Outlet } from 'react-router'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    if (!cartOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setCartOpen(false)
    }

    document.body.classList.add('cart-open')
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('cart-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [cartOpen])

  return (
    <div className="app-shell">
      <Header onOpenCart={() => setCartOpen(true)} />
      <Outlet />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default App

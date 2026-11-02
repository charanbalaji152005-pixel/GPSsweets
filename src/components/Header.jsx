import { useState, useCallback } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-mark">GPS</span>
        <span>
          <b>GPS Sweets</b>
          <small>MADE FOR SWEET MOMENTS</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {menuOpen ? '×' : '☰'}
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#collection" onClick={closeMenu}>Our Sweets</a>
        <a href="#offers" onClick={closeMenu}>Diwali Offers</a>
        <a href="#visit" onClick={closeMenu}>Visit Us</a>
      </nav>
      <a className="nav-cta" href="#collection">
        Explore sweets <span>↗</span>
      </a>
    </header>
  )
}

export default Header


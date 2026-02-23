import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileNavOpen({})
  }, [location])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.classList.remove('mobile-menu-open')
  }

  const toggleMobileNav = (index) => {
    setMobileNavOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const mobileNavItems = [
    { title: 'Customer Service', link: '/customer-service' },
    { title: 'Fidelity Assistant', link: '/fidelity-assistant' },
    { title: 'Open an account', link: '/open-account' },
    { 
      title: 'Accounts & Trade',
      items: ['Portfolio', 'Account Positions', 'Trade', 'Transfers', 'Cash Management', 'Bill Pay']
    },
    { 
      title: 'Planning & Advice',
      items: ['What We Offer', 'Build Your Free Plan', 'Financial Basics', 'Building Savings']
    },
    { 
      title: 'News & Research',
      items: ['News', 'Wealth Management Insights', 'Stocks, ETFs, Crypto', 'Mutual Funds']
    },
    { 
      title: 'Products',
      items: ['Retirement & IRAs', 'Spending & Saving', 'Investing & Trading', 'Crypto', 'Fixed Income, Bonds & CDs', 'Annuities']
    },
    { 
      title: 'Why Fidelity',
      items: ['The Fidelity Advantage', 'Planning & Advice', 'Straightforward Pricing', 'About Fidelity']
    }
  ]

  const desktopNavItems = [
    { 
      title: 'Accounts & Trade',
      items: [
        { name: 'Portfolio', locked: true },
        { name: 'Account Positions', locked: true },
        { name: 'Trade', locked: true },
        { name: 'Fidelity Trader+ Web', locked: true },
        { name: 'Fidelity Trader+', locked: false },
        { name: 'Transfers', locked: false },
        { name: 'Cash Management', locked: true },
        { name: 'Bill Pay', locked: true },
        { name: 'Full View', locked: true },
        { name: 'Security Settings', locked: true },
        { name: 'Account Features', locked: true },
        { name: 'Documents', locked: true },
        { name: 'Tax Forms & Information', locked: false },
        { name: 'Retirement Distributions', locked: false },
        { name: 'Refer a Friend', locked: false }
      ]
    },
    { 
      title: 'Planning & Advice',
      items: [
        { name: 'What We Offer', locked: false },
        { name: 'Build Your Free Plan', locked: false },
        { name: 'My Goals', locked: true },
        { name: 'Financial Basics', locked: false },
        { name: 'Building Savings', locked: false }
      ]
    },
    { 
      title: 'News & Research',
      items: [
        { name: 'News', locked: false },
        { name: 'Wealth Management Insights', locked: false },
        { name: 'Watchlist', locked: true },
        { name: 'Alerts', locked: true },
        { name: 'Stocks, ETFs, Crypto', locked: false },
        { name: 'Mutual Funds', locked: false },
        { name: 'Fixed Income, Bonds & CDs', locked: false },
        { name: 'Options', locked: true },
        { name: 'IPOs', locked: false },
        { name: 'Annuities', locked: false },
        { name: 'Learn', locked: false }
      ]
    },
    { 
      title: 'Products',
      items: [
        { name: 'Retirement & IRAs', locked: false },
        { name: 'Spending & Saving', locked: false },
        { name: 'Investing & Trading', locked: false },
        { name: 'Mutual Funds', locked: false },
        { name: 'Crypto', locked: false },
        { name: 'Direct Indexing', locked: false },
        { name: 'Fixed Income, Bonds & CDs', locked: false },
        { name: 'ETFs', locked: false },
        { name: 'Options', locked: false },
        { name: 'Sustainable Investing', locked: false },
        { name: 'Managed Accounts', locked: false },
        { name: '529 College Savings', locked: false },
        { name: 'Health Savings Accounts', locked: false },
        { name: 'Annuities', locked: false },
        { name: 'Life Insurance', locked: false }
      ]
    },
    { 
      title: 'Why Fidelity',
      items: [
        { name: 'The Fidelity Advantage', locked: false },
        { name: 'Planning & Advice', locked: false },
        { name: 'Trading', locked: false },
        { name: 'Straightforward Pricing', locked: false },
        { name: 'Insights & Tools', locked: false },
        { name: 'Security & Protection', locked: false },
        { name: 'FDIC & SIPC Coverage', locked: false },
        { name: 'Marketplace Solutions', locked: false },
        { name: 'About Fidelity', locked: false },
        { name: 'Careers', locked: false }
      ]
    }
  ]

  return (
    <header className="site-header">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button 
          className={`mobile-hamburger ${mobileMenuOpen ? 'is-active' : ''}`} 
          type="button" 
          aria-label="Toggle menu" 
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line" style={{ background: '#fff' }}></span>
          <span className="hamburger-line" style={{ background: '#fff' }}></span>
          <span className="hamburger-line" style={{ background: '#fff' }}></span>
        </button>
        <Link className="mobile-logo" to="/" aria-label="Fidelity">
          <img className="mobile-logo-img" src="/img/logo.svg" alt="Fidelity Investment" />
        </Link>
        <Link className="mobile-login-btn" to="/login">Log in</Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" type="button" aria-label="Close menu" onClick={closeMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {mobileNavItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item.link ? (
                <Link className="mobile-nav-link" to={item.link} onClick={closeMobileMenu}>
                  {item.title}
                </Link>
              ) : (
                <>
                  <button 
                    className={`mobile-nav-trigger ${mobileNavOpen[index] ? 'is-open' : ''}`} 
                    type="button" 
                    aria-expanded={mobileNavOpen[index]}
                    onClick={() => toggleMobileNav(index)}
                  >
                    {item.title}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className={`mobile-submenu ${mobileNavOpen[index] ? 'is-open' : ''}`}>
                    {item.items.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex} 
                        className="mobile-submenu-link" 
                        to={`/${subItem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        onClick={closeMobileMenu}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="header-green desktop-header">
        <div className="container header-green-inner">
          <Link className="brand" to="/" aria-label="Fidelity">
            <img className="brand-logo" src="/img/logo.svg" alt="Fidelity Investment" />
          </Link>
          <div className="header-links">
            <Link className="header-link" to="/customer-service">Customer Service</Link>
            <Link className="header-link" to="/fidelity-assistant">Fidelity Assistant</Link>
            <Link className="header-link" to="/profile">Profile</Link>
            <Link className="header-btn header-btn--light" to="/open-account">Open an account</Link>
            <Link className="header-btn header-btn--outline" to="/login">Log in</Link>
          </div>
        </div>
      </div>

      <div className="header-white desktop-header">
        <div className="container header-white-inner">
          <nav className="nav-links" id="mainNav" aria-label="Primary">
            {desktopNavItems.map((item, index) => (
              <div key={index} className="nav-item">
                <button className="nav-trigger" type="button" aria-expanded="false">
                  {item.title}
                </button>
                <div className="dropdown" role="menu">
                  <div className="dropdown-list" role="none">
                    {item.items.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex} 
                        className={`dropdown-link ${subItem.locked ? 'dropdown-link--locked' : ''}`}
                        to={`/${subItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        role="menuitem"
                      >
                        <span className="dropdown-text">{subItem.name}</span>
                        {subItem.locked && <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <div className="nav-right">
            <div className="search">
              <i className="fas fa-search search-icon" aria-hidden="true"></i>
              <input className="search-input" type="text" placeholder="How can we help?" aria-label="Search" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


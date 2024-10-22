import './styles/style.css'
import pageContact from './pages/page_contact'
import pageGlobal from './pages/page_global'
import pageHome from './pages/page_home'

// Global
pageGlobal()

// Page Specific
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/contact-us') {
  pageContact()
}

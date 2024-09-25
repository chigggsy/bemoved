import './styles/style.css'
import pageGlobal from './pages/page_global'
import pageHome from './pages/page_home'
import pageTest from './pages/page_test'

// Global
pageGlobal()

// Page Specific
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/test-page') {
  pageTest()
}

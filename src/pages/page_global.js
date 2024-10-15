const pageGlobal = () => {
  const navbar = () => {
    // Declaring variables
    const navHamburger = document.querySelector('.nav-hamburger')
    const navIconMenu = document.querySelector('.nav-icon-menu')
    const navIconClose = document.querySelector('.nav-icon-close')
    const navItemsMobile = document.querySelector('.nav-items-mobile')
    const currentSlug = window.location.pathname.split('/').pop() || 'home'
    const activeNavItem = document.querySelector(`[data-page="${currentSlug}"]`)
    console.log(activeNavItem)

    // Functions
    const toggleNav = () => {
      navIconMenu.classList.toggle('nav-icon-inactive')
      navIconClose.classList.toggle('nav-icon-inactive')
      navItemsMobile.classList.toggle('nav-mobile-open')
    }

    const selectActiveNavItem = () => {
      if (activeNavItem) {
        const highlight = activeNavItem.querySelector('.nav-item--highlight')

        if (highlight) {
          highlight.style.opacity = 1
        }
      }
    }

    // Events
    navHamburger.addEventListener('click', toggleNav)
    selectActiveNavItem()
  }
  navbar()
}

export default pageGlobal

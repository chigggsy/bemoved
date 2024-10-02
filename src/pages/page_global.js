const pageGlobal = () => {
  const navbar = () => {
    // Declaring variables
    const navHamburger = document.querySelector('.nav-hamburger')
    const navIconMenu = document.querySelector('.nav-icon-menu')
    const navIconClose = document.querySelector('.nav-icon-close')
    const navItemsMobile = document.querySelector('.nav-items-mobile')

    // Functions
    const toggleNav = () => {
      navIconMenu.classList.toggle('nav-icon-inactive')
      navIconClose.classList.toggle('nav-icon-inactive')
      navItemsMobile.classList.toggle('nav-mobile-open')
    }

    // Events
    navHamburger.addEventListener('click', toggleNav)
  }
  navbar()
}

export default pageGlobal

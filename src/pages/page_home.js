// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const pageHome = () => {
  // Functions
  function animations() {
    const tl_hero = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl_hero
      .to('.preloader', { opacity: 0, duration: 0.5 }, 0)
      .set('.preloader', { display: 'none' }, 0.5)
      .from('.nav-wrapper', { y: '-100%', duration: 1 }, 0)
      .from(
        '.u-flex-column h1:nth-child(1)',
        { opacity: 0, y: 40, duration: 1 },
        '>-0.5'
      )
      .from(
        '.hero--highlight',
        {
          opacity: 0,
          y: 40,
          duration: 1,
        },
        '<+0.3'
      )
      // Plugs
      .from(
        '.hero-plug.is-left',
        { x: -100, rotate: 10, opacity: 0, duration: 1.25 },
        '<'
      )
      .from(
        '.hero-plug.is-right',
        { x: 100, rotate: -10, opacity: 0, duration: 1.25 },
        '<+0.01'
      )
      .from('.u-flex-column p', { opacity: 0, y: 20, duration: 1 }, '<+0.15')
      .from(
        '.floating-action-bar',
        { opacity: 0, y: 20, duration: 1 },
        '<+0.05'
      )
      .from(
        '.section.is-hero .benefit',
        { opacity: 0, duration: 2, stagger: 0.03 },
        '<+0.5'
      )
      .from('.marquee', { opacity: 0, duration: 1 }, '<')
      .from('.section.is-steps', { opacity: 0, duration: 1 }, '<')
  }

  function accordion() {
    const accordionList = document.querySelectorAll('.faq')

    accordionList.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const answer = accordion.querySelector('.faq-answer')
        const chevron = accordion.querySelector('.faq-chevron')

        answer.classList.toggle('is-open')
        if (chevron) {
          chevron.classList.toggle('is-active')
        }
      })
    })
  }

  // Runs
  animations()
  accordion()
}

export default pageHome

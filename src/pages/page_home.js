import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const pageHome = () => {
  const animations = () => {
    // Intro animation
    const tl_intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl_intro
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
        '.section.is-hero .hero-plug.is-left',
        { x: -100, rotate: 10, opacity: 0, duration: 1.25 },
        '<'
      )
      .from(
        '.section.is-hero .hero-plug.is-right',
        { x: 100, rotate: -10, opacity: 0, duration: 1.25 },
        '<+0.01'
      )
      .from('.u-flex-column p', { opacity: 0, y: 20, duration: 1 }, '<+0.15')
      .from(
        '.section.is-hero .floating-action-bar',
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

    // Section - Steps
    const tl_steps = gsap.timeline({
      defaults: {
        scrollTrigger: {
          trigger: '.section.is-steps',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      },
    })
    tl_steps
      .from('.highlight-rollup', {
        y: '3.2em',
      })
      .from('.section.is-steps .card', { opacity: 0, y: 40, stagger: 0.5 })

    // Section - To Dos
    /* const tl_todos = gsap.timeline({
      scrollTrigger: {
        trigger: '.section.is-todos',
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    })
    tl_todos
      .to('.tl-todo', { opacity: 0.3 }, '<')
      .to('.todo.is-done', { opacity: 1 }, '<')
    */

    // Section - CTA
    const tl_sectionCTA = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-wrapper.is-cta-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })
    tl_sectionCTA
      .from(
        '.section-wrapper.is-cta-section .hero-plug.is-left',
        {
          x: -100,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        },
        0
      )
      .from(
        '.section-wrapper.is-cta-section .hero-plug.is-right',
        { x: 100, opacity: 0, duration: 0.75, ease: 'power3.out' },
        0
      )
      .from(
        '.section-wrapper.is-cta-section',
        {
          backgroundImage:
            'radial-gradient(circle, rgb(81, 26, 11), rgb(0, 0, 0))',
          duration: 1.5,
          ease: 'power2.out',
        },
        '<+0.35'
      )
  }

  // Runs
  animations()
}

export default pageHome

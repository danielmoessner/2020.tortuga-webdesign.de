document.addEventListener('DOMContentLoaded', () => {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#000000',
        text: '#ffffff'
      },
      button: {
        background: '#282629',
        text: '#ffffff'
      }
    },
    theme: 'edgeless',
    position: 'bottom-right',
    type: 'opt-in',
    content: {
      message: 'Wir benutzen Cookies. Wenn Sie die Website weiter nutzen, gehen wir von Ihrem Einverständnis aus.',
      dismiss: 'Ablehnen',
      allow: 'Okay!',
      deny: 'Ablehnen',
      link: 'Mehr erfahren',
      href: 'https://tortuga-webdesign.de/datenschutz/'
    }
  })
})

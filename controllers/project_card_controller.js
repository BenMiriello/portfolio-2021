(() => {
  const application = Stimulus.Application.start();

  application.register('project-card', class extends Stimulus.Controller {
    static get targets() { return [ 'container' ] }

    toggle() {
      this.containerTarget.classList.toggle('project-card-container-extended')
    }
  });
})();

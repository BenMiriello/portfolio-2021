// NAMING: pc = project card

(() => {
  const application = Stimulus.Application.start();

  application.register('pc', class extends Stimulus.Controller {
    static get targets() { return [ 'frame' ] }

    toggle() {
      this.frameTarget.classList.toggle('pc-frame-extended')
    }
  });
})();

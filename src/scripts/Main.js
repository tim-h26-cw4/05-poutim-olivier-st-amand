import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();

class Main {
  constructor() {
    console.log('Test numéro 1');
    this.init();
  }

  init() {
    const poutine = document.querySelectorAll("[data-component='Chefs']");
    for (let i = 0; i < poutine.length; i++) {
      const poutines = poutine[i];
      new Chef(poutines);
    }
  }
}

new Main();

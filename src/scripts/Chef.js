import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = '';
    console.log(this.element);
    this.init();
  }

  init() {
    const poutinesPremier = document.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutinesPremier.length; i++) {
      const selection = poutinesPremier[i];
      const instances = new Poutine(selection);
      this.menu.push(instances);
    }
    const btnChoix = document.querySelector('.js-button');

    btnChoix.addEventListener('click', this.sendOrder.bind(this));
    console.log(btnChoix);
  }

  sendOrder() {
    console.log('Test numéro trois');
  }
}

/*for (let i = 0; i < btnChoix.length; i++) {
      const boutons = btnChoix[i];
      boutons.addEventListener('click', this.sendOrder.bind(this));
    }*/

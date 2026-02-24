import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutinesPremier = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutinesPremier.length; i++) {
      const selection = poutinesPremier[i];
      const instances = new Poutine(selection);
      this.menu.push(instances);
    }

    const btnChoix = this.element.querySelector('.js-button');
    btnChoix.addEventListener('click', this.sendOrder.bind(this));
    console.log(btnChoix);
  }

  sendOrder() {
    console.log('Test numéro trois');
  }
}

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
    this.container.innerHTML = '';
    console.log(this.menu);
    let listPoutine = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const verification = this.menu[i];
      if (verification.selectedType !== '') {
        listPoutine++;
        console.log(verification);
      }
    }
    console.log('Test numéro trois');
    const paragraph = document.createElement('p');
    paragraph.textContent = `Nombre total de poutine(s): ${listPoutine}`;
    this.container.appendChild(paragraph);
  }
}

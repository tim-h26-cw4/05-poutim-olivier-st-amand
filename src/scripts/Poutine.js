export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type-poutine');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const selection = this.types[i];
      selection.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      console.log(type);
    }
  }
}

// Funçao Construtora

// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// Classes - A classe vem para fazer a mesma coisa da função construtora

class Button {
  constructor(text, background, color) {       // Ligaçao
    this.text = text;
    this.background = background;
    this.color = color;
    // return this.element();  Funciona, mas vc perde todo o acesso ao obejeto element()
  }
  element() { // Não precisa usar prototype - passa direto
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {  // Colocar o botão na tela
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element()); // Acesso ao element com a palavra chave this
    return targetElement;
  }
  static blueButton(text) {  // Static - Retornar a propria classe com propriedades já prá definidas
    return new Button(text, 'Blue', 'White');  
  }
}
const botaoAzul = Button.blueButton('Comprar');
// const botaoAzul = new Button('Comprar','blue','black');        // Ligado ao Constructor
// console.log(botaoAzul.element());
// console.log(botaoAzul.appendTo('body'));   // Acesso ao elemento com a palavra chave this

// class Button {
//   constructor(options) {
//     this.options = options;
//   }

//   static createButton(text, background) {  // Static via criar um metodo dentro da função contrutora - não vai ser um metodo do prototipo - metodo com Array.from
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;   // parametro de dentro da função - não de constructor
//     buttonElement.style.background = background;   // parametro de dentro da função - não de constructor
//     return buttonElement;
//   }
// }

// const optionsBlue = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// }

// const blueButton = new Button(optionsBlue);

// const blueButtonStatic = Button.createButton('Clique', 'blue');

// console.log(blueButtonStatic);

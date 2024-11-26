import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-cards.component.html',
  styleUrl: './slider-cards.component.scss'
})
export class SliderCardsComponent {
  cards = [{
      title: 'Camiseta vergaaa',
      description: 'Descripción de la Camiseta Monastery',
      imgUrl: './assets/images/banneraz.png',
      buttonUrl: '#',
      buttonText: 'Comprar ahora'
  },
  {
    title: 'Camiseta Monastery',
    description: 'Descripción de la Camiseta Monastery',
    imgUrl: './assets/images/banneraz.png',
    buttonUrl: '#',
    buttonText: 'Comprar ahora'
  },
  {
    title: 'Camiseta Mjajajajaj',
    description: 'Descripción de la Camiseta Monastery',
    imgUrl: './assets/images/banneraz.png',
    buttonUrl: '#',
    buttonText: 'Comprar ahora'
  }
];
}

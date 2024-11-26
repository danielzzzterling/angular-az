import { Component } from '@angular/core';
import { SobreNosotrosComponent } from '../../components/sobre-nosotros/sobre-nosotros.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { SliderCardsComponent } from '../../components/slider-cards/slider-cards.component';
import { ButtonWhatsappComponent } from '../../button-whatsapp/button-whatsapp.component';
import { PopupFormComponent } from '../../popup-form/popup-form.component';
import { TopBarComponent } from '../top-bar/top-bar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[SobreNosotrosComponent,SliderComponent,SliderCardsComponent,ButtonWhatsappComponent,PopupFormComponent,TopBarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

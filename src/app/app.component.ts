import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import { FooderComponent } from './fooder/fooder.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardsComponent } from './slider-cards/slider-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonWhatsappComponent } from './button-whatsapp/button-whatsapp.component';
import { PopupFormComponent } from './popup-form/popup-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SobreNosotrosComponent,FooderComponent,NavbarComponent,SliderComponent,SliderCardsComponent,ButtonWhatsappComponent,PopupFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
}

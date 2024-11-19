import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import { FooderComponent } from './fooder/fooder.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardsComponent } from './slider-cards/slider-cards.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SobreNosotrosComponent,FooderComponent,NavbarComponent,SliderComponent,SliderCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
}

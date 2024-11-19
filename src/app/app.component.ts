import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import { FooderComponent } from './fooder/fooder.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardsComponent } from './slider-cards/slider-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SobreNosotrosComponent,FooderComponent,SliderComponent,SliderCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
}

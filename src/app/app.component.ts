import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooderComponent } from './core/fooder/fooder.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooderComponent,NavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient]
})
export class AppComponent {
  title = 'proyecto-final';
}
export class ProductListComponent {
  // Aquí puedes agregar la lógica para tu lista de productos
}

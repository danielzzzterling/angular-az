import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.scss'
})
export class SobreNosotrosComponent {
  
  public informacion: {titulo: string, descripcion: string}[];

  constructor() {
    this.informacion = [
      {
        titulo: "Envío rápido",
        descripcion: "Recibe tus productos rápidamente gracias a nuestra red de envíos express."
      },
      {
        titulo: "Variedad de métodos de pago",
        descripcion: "Ofrecemos varias opciones para facilitar tu compra, incluyendo tarjetas y pagos en línea."
      },
      {
        titulo: "Fácil devolución",
        descripcion: "Si no estás completamente satisfecho con tu compra, puedes realizar cambios o devoluciones fácilmente."
      }
    ];
  }

  ngOnInit(): void {
  }

}


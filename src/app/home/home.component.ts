import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {


  constructor( private OfertasServices: OfertaService ) {}
  ngOnInit() {
    console.log(this.OfertasServices.getOfertas())
  }
}

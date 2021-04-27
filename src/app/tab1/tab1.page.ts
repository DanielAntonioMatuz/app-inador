import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  slides = [
    {
      img: 'assets/images/mujer.svg',
      titulo: 'Visible changes<br>in 3 weeks'
    },
    {
      img: 'assets/images/pastel.svg',
      titulo: 'Forget about<br>strict diet'
    },
    {
      img: 'assets/images/dinero.svg',
      titulo: 'Save money on<br>gym membership'
    }
  ];


}

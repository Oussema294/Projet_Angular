import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attributes
  title: Conference[];
  list: Conference[];

  constructor() {
    //services
  }
  //methods
  ngOnInit() {
    this.list = [
      {
        title: 'conference',
        description: 'This is a conference',
        date: '12-03-2026',
        nbrMax: 1,
        nbrReservation: 0,
        picture: 'https://picsum.photos/200/200',


      },
    ];
  }

  change() {
    //action
  }
  participate(conf: Conference) {
    conf.nbrReservation++;
  }
}

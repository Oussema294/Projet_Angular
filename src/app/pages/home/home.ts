import { Component } from '@angular/core';
import { ListConf } from '../list-conf/list-conf';

@Component({
  selector: 'app-home',
  imports: [ListConf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  membres= [
    {nom:'Anna Barry',role:'Développeuse Angular-Composants & services'},
    {nom:'Nogaye Diouf',role:'Développeuse Angular-Pages & Routags'}

  ]
}

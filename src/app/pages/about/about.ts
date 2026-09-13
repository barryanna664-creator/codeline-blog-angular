import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
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

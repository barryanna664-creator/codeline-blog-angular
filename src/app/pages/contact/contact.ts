import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nom = '';
  email = '';
  sujet = '';
  message = '';
  messageEnvoye = false;

  envoyerFormulaire() {
    this.messageEnvoye = true;
    console.log('Formulaire envoyé', this.nom, this.email);
  }
}
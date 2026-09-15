import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule], 
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
import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private 'contactService': ContactService) {}

  onSubmit(): void {
    this.'contactService'.sendMessage(this.contact);
  }
}

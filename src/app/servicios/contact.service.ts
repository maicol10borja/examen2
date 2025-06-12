import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendMessage(contactData: { name: string; email: string; message: string }): void {
    console.log('Formulario enviado con los siguientes datos:');
    console.log('Nombre:', contactData.name);
    console.log('Email:', contactData.email);
    console.log('Mensaje:', contactData.message);
  }
}

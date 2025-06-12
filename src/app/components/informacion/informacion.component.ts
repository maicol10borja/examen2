import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-informacion',
  imports: [NabvarComponent,FooterComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

}

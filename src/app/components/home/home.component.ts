import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NabvarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

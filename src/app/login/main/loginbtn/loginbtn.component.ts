import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatButtonComponent} from '@angular/material';

@Component({
  selector: 'app-loginbtn',
  standalone: true,
  imports: [
    CommonModule,
    // MatButtonComponent
  ],
  templateUrl: './loginbtn.component.html',
  styleUrl: './loginbtn.component.css'
})
export class LoginbtnComponent {

  @Input() buttonTitle:string='';
}

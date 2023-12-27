import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inputfield',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.css'
})
export class InputfieldComponent implements OnInit{
  @Input() FormControlName: string='';
  @Input() placeholder: string='';
  @Input() type: string='';
  @Input() class: string='';


  ngOnInit(): void {
    
  }


}

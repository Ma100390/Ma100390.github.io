import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input() showData: boolean = true; 
  nome: string = '';
  email: string = '';
  message: string = ''; 
  submit: boolean = false;
  onSubmit() {
    this.submit = true;
    console.log('Form inviato con successo!', this.nome, this.email , this.message);
    
  }
  setMessage() {
    this.message = 'Questo è un messaggio di esempio.';
  }
}

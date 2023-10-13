import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input() showData: boolean = true; // Inizializza come falso facciamo riferimento a questo valore in app.component e lo cambiamo in true quando l'utente clicca sul pulsante contact, inportazione di INPUT
  
  nome: string = '';
  email: string = '';
  message: string = ''; // Inizializza la variabile message
  submit: boolean = false;

  onSubmit() {
    // Puoi inserire la logica per gestire l'invio del form qui
    this.submit = true;
    console.log('Form inviato con successo!', this.nome, this.email , this.message);
    
  }


  // Funzione per impostare il messaggio
  setMessage() {
    this.message = 'Questo è un messaggio di esempio.';
  }
}

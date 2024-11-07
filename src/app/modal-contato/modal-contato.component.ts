import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-contato',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent {
  isVisible: boolean = false;
  phone: number | string = '';
  name: string = '';
  email: string = '';
  feedbackContent: string = ''; // Armazena o feedback do usuário
  

  @Output() feedbackSubmitted = new EventEmitter<string>();
//lógica do modal:
  openModal() {
    this.isVisible = true;
    this.name = '';
    this.email = '';
    this.feedbackContent = ''; // Reseta o conteúdo ao abrir
    this.phone 
  }

  closeModal() {
    this.isVisible = false;
  }

  submitFeedback() {
    console.log(this.feedbackContent); // Exibe o feedback no console
    this.feedbackSubmitted.emit(this.feedbackContent); // Emite o feedback para o componente pai
    this.closeModal(); // Fecha o modal após enviar o feedback
  }
}

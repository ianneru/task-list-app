import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tarefa } from 'app/entities/Tarefa';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.scss'],
  providers : [GlobalService]
})
export class TarefaCreateComponent implements OnInit {

  titulo = new FormControl(''); 
  descricao = new FormControl('');
  conteudo = new FormControl('');

  constructor(private globalService : GlobalService) { }

  ngOnInit() {
   
  }

  addTarefa() {
    let tarefa = new Tarefa(this.titulo.value,
      this.conteudo.value,
      this.descricao.value
    );
    
    this.globalService.post(tarefa,'Tarefa')
      .then((result) =>  window.location.href= "/tarefa-list");
  }
}

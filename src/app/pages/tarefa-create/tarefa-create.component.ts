import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth/auth.service';
import { Tarefa } from 'app/services/tarefa/tarefa.model';
import { TarefaService } from 'app/services/tarefa/tarefa.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.scss'],
  providers : [AuthService]
})
export class TarefaCreateComponent implements OnInit {
  form: FormGroup;
  tarefa : Tarefa;
  titulo = new FormControl(''); 
  descricao = new FormControl('');
  conteudo = new FormControl('');

  constructor(public fb: FormBuilder,
    public tarefaService: TarefaService) { }

  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      conteudo: [''],
      descricao: [''],
    })
  }

  addTarefa() {
    this.tarefaService.create(this.form.value).subscribe(res => {
      console.log("Tarefa Created!", this.tarefa);
      window.location.href= "/tarefa-list";
    }), (error) => {
      console.log(error);
    };
  }
}

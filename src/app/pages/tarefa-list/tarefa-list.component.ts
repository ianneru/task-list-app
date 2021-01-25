import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Tarefa } from 'app/services/tarefa/tarefa.model';
import { TarefaService } from 'app/services/tarefa/tarefa.service';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss'],
  providers : [AuthService]
})
export class TarefaListComponent implements OnInit {
  
  tarefaList : any;

  constructor(private tarefaService : TarefaService) { }

  ngOnInit() {
    this.loadTarefas();    
  }

  loadTarefas()
  {
    this.tarefaService.getAll()
      .subscribe((data: any[]) => {
          let _data = data.filter((number) => !number.dataRemocao);

          for(let val of _data){
            val.dataConclusaoFormat = `${new Date(val.dataConclusao).toLocaleDateString()} ${new Date(val.dataConclusao).toLocaleTimeString()}`;
          }
          this.tarefaList = _data;
      });

  }
  concluirTarefa(tarefa : any) 
  {
     tarefa.concluido = true;
     tarefa.dataConclusao = new Date().toLocaleTimeString();
     this.tarefaService.update(tarefa)
      .subscribe((data: any) => {
        this.loadTarefas();
    });
  }
  deleteTarefa(tarefa : any) 
  {
    tarefa.dataRemocao = new Date().toLocaleTimeString();
    this.tarefaService.update(tarefa)
      .subscribe((data: any) => {
        this.loadTarefas();
    });
  }

}

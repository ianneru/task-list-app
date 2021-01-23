import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss'],
  providers : [GlobalService]
})
export class TarefaListComponent implements OnInit {
  
  tarefaList : any;

  constructor(private globalService : GlobalService) { }

  ngOnInit() {
    this.getTarefas().then(result => this.tarefaList = result);
  }

  getTarefas() : Promise<any> 
  {
      return this.globalService.get('Tarefa');
  }

  deleteTarefa(tarefa : any) 
  {
     this.globalService.delete('Tarefa/'+tarefa.id)
      .then((result) =>{
          debugger; 
          this.tarefaList = this.tarefaList.filter(item => item !== tarefa);
        } 
      );
  }

}

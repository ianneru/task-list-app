import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { Tarefa } from 'app/services/tarefa/tarefa.model';
import { TarefaService } from 'app/services/tarefa/tarefa.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.scss'],
  providers : [AuthService]
})
export class TarefaUpdateComponent implements OnInit {
  form: FormGroup;
  tarefa : Tarefa;
  tarefa$ : Observable<Tarefa>;
  titulo = new FormControl(''); 
  descricao = new FormControl('');
  conteudo = new FormControl('');

  constructor(public fb: FormBuilder,
    private route: ActivatedRoute,
    public tarefaService: TarefaService) { }

  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      conteudo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });

    var id = this.route.snapshot.params.id;

    this.tarefaService.getById(id)
                    .subscribe((tarefa) =>  this.form.patchValue(tarefa || {}));

  }

  updateTarefa() {
    var id = this.route.snapshot.params.id;
    let f = this.form.getRawValue();
    f.id = id;
    this.tarefaService.update(f).subscribe(res => {
      console.log("Tarefa Atualizado!", this.tarefa);
      window.location.href= "/tarefa-list";
    }), (error) => {
      console.log(error);
    };
  }
}

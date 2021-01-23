import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaListComponent } from './tarefa-list.component';

describe('TarefaListComponent', () => {
  let component: TarefaListComponent;
  let fixture: ComponentFixture<TarefaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

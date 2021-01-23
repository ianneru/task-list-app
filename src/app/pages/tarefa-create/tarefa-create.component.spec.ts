import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCreateComponent } from './tarefa-create.component';

describe('TarefaCreateComponent', () => {
  let component: TarefaCreateComponent;
  let fixture: ComponentFixture<TarefaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

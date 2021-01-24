import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaUpdateComponent } from './tarefa-update.component';

describe('TarefaCreateComponent', () => {
  let component: TarefaUpdateComponent;
  let fixture: ComponentFixture<TarefaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

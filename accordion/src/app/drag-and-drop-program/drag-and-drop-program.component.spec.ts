import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropProgramComponent } from './drag-and-drop-program.component';

describe('DragAndDropProgramComponent', () => {
  let component: DragAndDropProgramComponent;
  let fixture: ComponentFixture<DragAndDropProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

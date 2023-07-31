import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDropDownProgramComponent } from './section-drop-down-program.component';

describe('SectionDropDownProgramComponent', () => {
  let component: SectionDropDownProgramComponent;
  let fixture: ComponentFixture<SectionDropDownProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDropDownProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDropDownProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

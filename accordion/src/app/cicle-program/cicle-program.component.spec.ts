import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleProgramComponent } from './cicle-program.component';

describe('CicleProgramComponent', () => {
  let component: CicleProgramComponent;
  let fixture: ComponentFixture<CicleProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicleProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglogExampleComponent } from './diaglog-example.component';

describe('DiaglogExampleComponent', () => {
  let component: DiaglogExampleComponent;
  let fixture: ComponentFixture<DiaglogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaglogExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaglogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

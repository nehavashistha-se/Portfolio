import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalskillComponent } from './technicalskill.component';

describe('TechnicalskillComponent', () => {
  let component: TechnicalskillComponent;
  let fixture: ComponentFixture<TechnicalskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalskillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

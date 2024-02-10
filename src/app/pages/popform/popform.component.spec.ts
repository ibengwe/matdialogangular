import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopformComponent } from './popform.component';

describe('PopformComponent', () => {
  let component: PopformComponent;
  let fixture: ComponentFixture<PopformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

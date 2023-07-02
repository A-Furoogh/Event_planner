import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventnewComponent } from './neweventnew.component';

describe('NeweventnewComponent', () => {
  let component: NeweventnewComponent;
  let fixture: ComponentFixture<NeweventnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeweventnewComponent]
    });
    fixture = TestBed.createComponent(NeweventnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

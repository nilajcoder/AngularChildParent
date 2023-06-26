import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebooksComponent } from './updatebooks.component';

describe('UpdatebooksComponent', () => {
  let component: UpdatebooksComponent;
  let fixture: ComponentFixture<UpdatebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

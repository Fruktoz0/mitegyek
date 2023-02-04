import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreceptComponent } from './editrecept.component';

describe('EditreceptComponent', () => {
  let component: EditreceptComponent;
  let fixture: ComponentFixture<EditreceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

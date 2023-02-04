import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitegyekmaComponent } from './mitegyekma.component';

describe('MitegyekmaComponent', () => {
  let component: MitegyekmaComponent;
  let fixture: ComponentFixture<MitegyekmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitegyekmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitegyekmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BekuldottreceptekComponent } from './bekuldottreceptek.component';

describe('BekuldottreceptekComponent', () => {
  let component: BekuldottreceptekComponent;
  let fixture: ComponentFixture<BekuldottreceptekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BekuldottreceptekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BekuldottreceptekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BekuldottreceptComponent } from './bekuldottrecept.component';

describe('BekuldottreceptComponent', () => {
  let component: BekuldottreceptComponent;
  let fixture: ComponentFixture<BekuldottreceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BekuldottreceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BekuldottreceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

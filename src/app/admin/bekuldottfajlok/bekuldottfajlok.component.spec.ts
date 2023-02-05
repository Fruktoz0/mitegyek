import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BekuldottfajlokComponent } from './bekuldottfajlok.component';

describe('BekuldottfajlokComponent', () => {
  let component: BekuldottfajlokComponent;
  let fixture: ComponentFixture<BekuldottfajlokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BekuldottfajlokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BekuldottfajlokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

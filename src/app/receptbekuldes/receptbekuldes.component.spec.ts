import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptbekuldesComponent } from './receptbekuldes.component';

describe('ReceptbekuldesComponent', () => {
  let component: ReceptbekuldesComponent;
  let fixture: ComponentFixture<ReceptbekuldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptbekuldesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptbekuldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestosComponent } from './gestos.component';

describe('GestosComponent', () => {
  let component: GestosComponent;
  let fixture: ComponentFixture<GestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumbasComponent } from './tumbas.component';

describe('TumbasComponent', () => {
  let component: TumbasComponent;
  let fixture: ComponentFixture<TumbasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TumbasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

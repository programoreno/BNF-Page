import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunComponent } from './albun.component';

describe('AlbunComponent', () => {
  let component: AlbunComponent;
  let fixture: ComponentFixture<AlbunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

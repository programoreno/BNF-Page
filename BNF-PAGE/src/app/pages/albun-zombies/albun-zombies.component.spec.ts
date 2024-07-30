import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunZombiesComponent } from './albun-zombies.component';

describe('AlbunZombiesComponent', () => {
  let component: AlbunZombiesComponent;
  let fixture: ComponentFixture<AlbunZombiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbunZombiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbunZombiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

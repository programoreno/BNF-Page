import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunPlantasComponent } from './albun-plantas.component';

describe('AlbunPlantasComponent', () => {
  let component: AlbunPlantasComponent;
  let fixture: ComponentFixture<AlbunPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbunPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbunPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

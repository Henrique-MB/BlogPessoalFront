import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnttrarComponent } from './enttrar.component';

describe('EnttrarComponent', () => {
  let component: EnttrarComponent;
  let fixture: ComponentFixture<EnttrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnttrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnttrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

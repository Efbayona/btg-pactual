import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFoundComponent } from './card-found.component';

describe('CardFoundComponent', () => {
  let component: CardFoundComponent;
  let fixture: ComponentFixture<CardFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

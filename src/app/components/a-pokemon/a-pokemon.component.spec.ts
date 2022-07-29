import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APokemonComponent } from './a-pokemon.component';

describe('APokemonComponent', () => {
  let component: APokemonComponent;
  let fixture: ComponentFixture<APokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

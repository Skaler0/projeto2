import { ComponentFixture, TestBed } from '@angular/core/testing';

import { filmeComponent } from './filme.component';

describe('filmeComponent', () => {
  let component: filmeComponent;
  let fixture: ComponentFixture<filmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [filmeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(filmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

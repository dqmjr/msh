import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MshComponent } from './msh.component';

describe('MshComponent', () => {
  let component: MshComponent;
  let fixture: ComponentFixture<MshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

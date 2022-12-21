import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSidebarComponent } from './anime-sidebar.component';

describe('AnimeSidebarComponent', () => {
  let component: AnimeSidebarComponent;
  let fixture: ComponentFixture<AnimeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

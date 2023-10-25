import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonTrovataComponent } from './page-non-trovata.component';

describe('PageNonTrovataComponent', () => {
  let component: PageNonTrovataComponent;
  let fixture: ComponentFixture<PageNonTrovataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNonTrovataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNonTrovataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

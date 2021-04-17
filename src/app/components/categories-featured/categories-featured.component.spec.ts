
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MockComponents } from 'ng-mocks';
import { CategoriesServiceMoks } from 'src/app/mocks-service/categories-mocks';
import { CategoriesService } from 'src/app/services/categories.service';

import { CategoriesFeaturedComponent } from './categories-featured.component';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;
  let h2: HTMLElement;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoriesFeaturedComponent,
       ],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMoks
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    fixture.detectChanges();
    h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Categorias e destaque');
  });

  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').length).toEqual(0);
  });

  it('should show component p in html', () => {
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('Ração');
  });

});

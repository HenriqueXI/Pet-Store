
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      declarations: [ CategoriesFeaturedComponent ],
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
    // Eu coloquei uma classe na div referente a cada item de categoria, por isso consegui obter pela classe
    expect(html.getElementsByClassName('category-item').length).toEqual(0);
  });

  it('should show component p in html', () => {
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('Ração');
  });

});
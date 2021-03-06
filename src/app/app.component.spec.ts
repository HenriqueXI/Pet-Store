import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductComponent } from './pages/product/product.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { RouterLink } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        CategoriesFeaturedComponent,
        ProductComponent,
        ProductItemComponent,
        RouterLink,
        MockComponents(
          MatIcon,
          MatSidenav,
          MatToolbar,
          MatSidenavContent,
          MatSidenavContainer,
          MatIcon,
          MatCardTitle,
          MatCard,
          MatCardContent,
          RouterLink
        )
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PetStore'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PetStore');
  });

  it('should render title in mat-toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-sidenav-content span').textContent).toContain('Pet Store');
  });
});

import { MockComponents } from 'ng-mocks';
import { ParametersService } from './../../services/parameters.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { ParametersServiceMocks } from 'src/app/mocks-service/ParametersServiceMocks';
import { ActivatedRoute } from '@angular/router';
import { MatCard } from '@angular/material/card';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        MockComponents(
          MatCard,
        )
       ],
      providers: [
        {
          provide: ParametersService,
          useClass: ParametersServiceMocks
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(id: string) {
                  return
                }
              }
            }
          }
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

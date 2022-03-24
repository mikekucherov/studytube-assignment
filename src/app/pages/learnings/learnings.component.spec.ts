import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsComponent } from './learnings.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningsModule } from './learnings.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../users/users.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('LearningsComponent', () => {
  let component: LearningsComponent;
  let fixture: ComponentFixture<LearningsComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningsComponent],
      imports: [
        LearningsModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: UsersService,
          useValue: {
            initUsers: () => {},
          },
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open creation modal', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.editLearning('new');
    expect(navigateSpy).toHaveBeenCalledWith([], {
      relativeTo: activatedRoute,
      queryParams: {
        learning: 'new',
      },
      queryParamsHandling: 'merge',
    });
  });
});

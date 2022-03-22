import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtonComponent } from './delete-button.component';
import { DELETE_MESSAGE_TOKEN } from './delete.token';
import { MatMenuModule } from '@angular/material/menu';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteButtonComponent],
      imports: [MatMenuModule],
      providers: [
        {
          provide: DELETE_MESSAGE_TOKEN,
          useValue: {
            title: 'Test title?',
            message: 'Test deletion message',
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersDialogComponent } from './edit-users-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';

describe('EditUsersDialogComponent', () => {
  let component: EditUsersDialogComponent;
  let fixture: ComponentFixture<EditUsersDialogComponent>;
  let userIdsList = ['1', '2', '3'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUsersDialogComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersDialogComponent);
    component = fixture.componentInstance;
    component.selectedUsers$.next(userIdsList);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user selection', () => {
    const checkId = '1';

    expect(
      component.getIsUserSelected(userIdsList, checkId)
    ).toBeTruthy();
  });

  it('should select user', (done) => {
    const selectedUserId = '4';
    component.clickUserRow(userIdsList, selectedUserId);
    component.selectedUsers$.subscribe((selectedUsers) => {
      expect(selectedUsers).toEqual([...userIdsList, selectedUserId]);
      done();
    });
  });
});

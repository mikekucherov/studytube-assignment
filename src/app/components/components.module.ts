import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LearningCardComponent } from './learning-card/learning-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmationMenuComponent } from './confirmation-menu/confirmation-menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TextareaComponent } from './textarea/textarea.component';
import { AvatarComponent } from './avatar/avatar.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    NavigationBarComponent,
    LearningCardComponent,
    ConfirmationMenuComponent,
    SpinnerComponent,
    DeleteButtonComponent,
    InputComponent,
    TextareaComponent,
    AvatarComponent,
  ],
  exports: [
    NavigationBarComponent,
    LearningCardComponent,
    SpinnerComponent,
    ConfirmationMenuComponent,
    DeleteButtonComponent,
    InputComponent,
    TextareaComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
  ],
})
export class ComponentsModule {}

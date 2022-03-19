import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LearningCardComponent } from './learning-card/learning-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmationMenuComponent } from './confirmation-menu/confirmation-menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    NavigationBarComponent,
    LearningCardComponent,
    ConfirmationMenuComponent,
    SpinnerComponent,
  ],
  exports: [
    NavigationBarComponent,
    LearningCardComponent,
    SpinnerComponent,
    ConfirmationMenuComponent,
  ],
  imports: [CommonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, MatButtonModule],
})
export class ComponentsModule {}

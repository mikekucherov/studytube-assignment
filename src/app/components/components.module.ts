import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LearningCardComponent } from './learning-card/learning-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [NavigationBarComponent, LearningCardComponent],
    exports: [NavigationBarComponent, LearningCardComponent],
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
})
export class ComponentsModule {}

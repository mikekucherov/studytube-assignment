import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "../../components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ComponentsModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserModule { }

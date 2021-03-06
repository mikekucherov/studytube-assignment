import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsModule } from '../../components/components.module';
import {MatTooltipModule} from "@angular/material/tooltip";
import {EditUserModule} from "../../features/edit-user/edit-user.module";

@NgModule({
  declarations: [UsersComponent, UsersTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    MatPaginatorModule,
    MatTableModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatTooltipModule,
    EditUserModule,
  ],
})
export class UsersModule {}

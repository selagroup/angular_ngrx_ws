import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamUsersViewContainerComponent } from './containers/team-users-view-container/team-users-view-container.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import {
  MatTableModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatListModule, MatButtonModule,
  MatDialogModule, MatSelectModule, MatFormFieldModule, MatOptionModule
} from '@angular/material';
import { UsersService } from './services/users.service';
import { UsersDataService } from './services/users-data.service';
import { ChooseTeamDialogComponent } from './components/choose-team-dialog/choose-team-dialog.component';
import {SharedModule} from '../shared/shared.module';
import { UsersViewContainerComponent } from './containers/users-view-container/users-view-container.component';
import {UsersRoutingModule} from './users-routing.module';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    MaterialModule

  ],
  providers: [UsersService, UsersDataService],
  exports:[TeamUsersViewContainerComponent],
  declarations: [TeamUsersViewContainerComponent, UsersTableComponent, ChooseTeamDialogComponent, UsersViewContainerComponent],
  entryComponents: [ChooseTeamDialogComponent]
})
export class UsersModule { }

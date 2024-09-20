import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { CreateGroupOfTasksComponent } from './create-group-of-tasks/create-group-of-tasks.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetGroupOfTasksComponent } from './get-group-of-tasks/get-group-of-tasks.component';
import { GetGroupsOfTasksComponent } from './get-groups-of-tasks/get-groups-of-tasks.component';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';
import { GroupOfTasksDetailsComponent } from './group-of-tasks-details/group-of-tasks-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UpdateGroupOfTasksComponent } from './update-group-of-tasks/update-group-of-tasks.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    CreateGroupOfTasksComponent,
    CreateProjectComponent,
    CreateTaskComponent,
    GetGroupOfTasksComponent,
    GetGroupsOfTasksComponent,
    GetProjectComponent,
    GetProjectsComponent,
    GetTaskComponent,
    GetTasksComponent,
    GroupOfTasksDetailsComponent,
    ProjectDetailsComponent,
    TaskDetailsComponent,
    UpdateGroupOfTasksComponent,
    UpdateProjectComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }

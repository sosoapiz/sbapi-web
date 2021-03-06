import { ProjectMemberService } from './service/project-member.service';
import { ProjectDetailResolver } from './service/project-detail-resolver.service';
import { ProjectService } from './service/project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectLayoutComponent } from './views/project-layout/project-layout.component';
import { ProjectInfoComponent } from './views/project-info/project-info.component';
import { ProjectMembersComponent } from './views/project-members/project-members.component';
import { ProjectDocumentsComponent } from './views/project-documents/project-documents.component';
import { SendNoticeComponent } from './views/send-notice/send-notice.component';
import { ProjectLogComponent } from './views/project-log/project-log.component';
import { ProjectAddComponent } from './views/project-add/project-add.component';
import { ProjectImportComponent } from './views/project-import/project-import.component';
import { ProjectFormComponent } from './partial/project-form/project-form.component';
import { ProjectMemberItemComponent } from './partial/project-member-item/project-member-item.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectLayoutComponent, ProjectInfoComponent,
    ProjectMembersComponent, ProjectDocumentsComponent, SendNoticeComponent, ProjectLogComponent,
    ProjectAddComponent, ProjectImportComponent, ProjectFormComponent, ProjectMemberItemComponent],
  providers: [ProjectService, ProjectDetailResolver, ProjectMemberService],
  entryComponents: [ProjectAddComponent, ProjectImportComponent]
})
export class ProjectModule { }

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'PROJECT MANAGEMENT PORTAL',
                items: [
                    { label: 'My Project', icon: '', routerLink: ['/project-management-portal/myproject'] }
                ]
            },
            {
                label: 'WORKSTATION PORTAL',
                items: [
                    { label: 'My Timesheet', icon: '', routerLink: ['/workstation-portal/mytimesheet'] },
                    { label: 'Document Editor', icon: '', routerLink: ['/workstation-portal/documenteditor'] }
                ]
            },
            {
                label: 'SELF SERVICE PORTAL',
                icon: '',
                items: [
                    { label: 'My Personal Information', icon: '', routerLink: ['/self-service-portal/personalinformation'] },
                    { label: 'Days Off', icon: '', routerLink: ['/self-service-portal/daysoff'] }
                ]
            },
            {
                label: 'EVALUATION PORTAL',
                icon: '',
                items: [
                    { label: 'Self Assessment', icon: '', routerLink: ['/evaluation-portal/selfassessment'] },
                    { label: 'Manager Evaluation', icon: '', routerLink: ['/evaluation-portal/managerevaluation'] },
                    { label: 'Development Plan', icon: '', routerLink: ['/evaluation-portal/developmentplan'] },
                    { label: 'Follow-Up Meeting', icon: '', routerLink: ['/evaluation-portal/followupmeeting'] }
                ]
            },
            {
                label: 'EMPLOYEE MANAGEMENT PORTAL',
                items: [
                    { label: 'Employee', icon: '', routerLink: ['/employee-management-portal/employees'] },
                    { label: 'Groups', icon: '', routerLink: ['/employee-management-portal/groups'] },
                    { label: 'Roles', icon: '', routerLink: ['/employee-management-portal/roles'] }
                ]
            },
            {
                label: 'UI COMPONENTS',
                items: [
                    { label: 'Form Layout', icon: '', routerLink: ['/ui-component/formlayout'] },
                    { label: 'Input', icon: '', routerLink: ['/ui-component/input'] }
                ]
            }
        ];
    }
}

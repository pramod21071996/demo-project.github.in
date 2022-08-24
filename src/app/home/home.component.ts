import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OrganisationDetail } from '../Models/ViewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  currentOrganisationDetail: OrganisationDetail[] = [];
  previousOrganisationDetail: OrganisationDetail[] = [];
  constructor(private _router: Router) { }

  ngOnInit() {
    this.currentOrganisationDetail = [
      { title: 'Project Title', description: 'TEB (Product Based)' },
      { title: 'Role', description: 'Developer' },
      { title: 'Technology', description: 'C#, ASP.NET Core, Angular 13, LINQ, Azure DevOps' },
      { title: 'Database', description: 'MongoDB' },
      { title: 'Tools', description: 'Visual Studio, Visual Studio Code, MongoDB Compass' },
      { title: 'Responsibilities', description: 'Development process, Fixed Bugs' }
    ];
    
    this.previousOrganisationDetail = [
      { title: 'Project Title', description: 'Insurance Management and Processing Application' },
      { title: 'Role', description: 'Developer' },
      { title: 'Technology', description: 'C#, ASP.NET Core, Angular, LINQ, Dapper, Azure DevOps' },
      { title: 'Database', description: 'SQL Server 2017' },
      { title: 'Tools', description: 'Visual Studio, Visual Studio Code, SQL Server Management System' },
      { title: 'Responsibilities', description: 'Development process, Fixed Bugs, C# unit testing, Angular unit testing' }
    ]
  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const leftPosition = document.getElementById('social-group')?.offsetLeft;
    document.getElementById('email-id')?.setAttribute('style', `right:${leftPosition}px;`);
  }

  LoadResumeViewer() {
    this._router.navigate([]).then(result => { window.open(`${environment.URL}/resume-viewer`, '_blank') });
  }

}

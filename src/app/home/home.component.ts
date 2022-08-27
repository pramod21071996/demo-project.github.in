import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OrganisationDetail } from '../Models/ViewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentOrganisationDetail: OrganisationDetail[] = [];
  previousOrganisationDetail: OrganisationDetail[] = [];
  isClickOnNavMenu: boolean = false;
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

  LoadResumeViewer() {
    this._router.navigate([]).then(result => { window.open(`${environment.URL}/resume-viewer`, '_blank') });
  }

  navigateToSection(navbarManu: string) {
    this.isClickOnNavMenu = true;
    let navbarHeight = document.getElementsByTagName('nav')[0]?.offsetHeight;
    let sectionHeight = document.getElementById(`${navbarManu}`)?.offsetTop ?? 0;
    sectionHeight = sectionHeight >= navbarHeight ? sectionHeight - navbarHeight - 16 : sectionHeight - 16;
    window.scrollTo({ top: sectionHeight, behavior: 'smooth' });
    document.getElementsByClassName('active-navbar-menu')[0]?.classList?.remove('active-navbar-menu');
    document.querySelector(`#${navbarManu}-menu a`)?.classList.add('active-navbar-menu');
    setTimeout(() => {
      this.isClickOnNavMenu = false;
    }, 1000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (!this.isClickOnNavMenu) {
      let navbarHeight = document.getElementsByTagName('nav')[0]?.offsetHeight;
      const li = document.querySelectorAll('.nav-item a');
      const sections = document.querySelectorAll('section');
      let sectionsLength = sections.length;
      while(--sectionsLength && Math.ceil(window.scrollY + navbarHeight) + 16 < sections[sectionsLength].offsetTop) {}
      li.forEach(x => x.classList.remove('active-navbar-menu'));
      li[sectionsLength]?.classList.add('active-navbar-menu');
    }
  }

}

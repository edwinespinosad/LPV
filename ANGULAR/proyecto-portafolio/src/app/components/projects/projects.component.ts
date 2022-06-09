import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from '../../services/project.service';
import {Global} from '../../services/global';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;
  constructor(public _projectService: ProjectService) { 
    this.url = Global.url;
    this.projects = [];
  }

  ngOnInit(): void {
    this.getProjects();
  }

  deleteProject(id: string) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this.getProjects();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getProjects(){
    console.log("Getting projects...");
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  
}

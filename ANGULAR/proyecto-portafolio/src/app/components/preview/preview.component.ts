import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [ProjectService]
})
export class PreviewComponent implements OnInit {

  public id: string = '';
  public url: string = '';
  public project: Project;

  constructor(public projectService: ProjectService, public route: ActivatedRoute) {
    this.url = Global.url;
    this.id = route.snapshot.params['id'];
    this.project = new Project("","","","",0,"");
  }

  ngOnInit(): void {
    this.getProject(this.id);
  }

  getProject(id: string): void {
    console.log(id);
    this.projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}

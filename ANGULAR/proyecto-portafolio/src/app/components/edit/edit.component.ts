import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public id: string = '';
  public url: string = '';
  public project: Project;
  public filesToUpload: Array<File>;

  constructor(public projectService: ProjectService, public uploadService: UploadService, public route: ActivatedRoute) {
    this.url = Global.url;
    this.id = route.snapshot.params['id'];
    this.project = new Project("", "", "", "", 0, "");
    this.filesToUpload = [];

  }

  ngOnInit(): void {
    this.getProject(this.id);
  }

  getProject(id: string): void {
    // console.log(id);
    this.projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
        // console.log(response);
      }, error => {
        console.log(error);
      });
  }

  onSubmit(form: any) {
    console.log(this.filesToUpload);
    this.projectService.editProject(this.project._id, this.project).subscribe(
      response => {
        if (response.project) {

          if (this.filesToUpload.length > 0) {
            this.uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'imagen').then((result: any) => {
              this.project.imagen = result.image;
              console.log(result);
              const alert = document.createElement('div');
              alert.classList.add('alert');
              alert.classList.add('alert-success');
              alert.classList.add('alert-dismissible')
              alert.classList.add('fade');
              alert.classList.add('show');

              alert.innerHTML = `
                <strong>Proyecto editado con exito!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
              document.getElementsByClassName('form')[0].prepend(alert);
            });
          }else {
            const alert = document.createElement('div');
            alert.classList.add('alert');
            alert.classList.add('alert-success');
            alert.classList.add('alert-dismissible')
            alert.classList.add('fade');
            alert.classList.add('show');

            alert.innerHTML = `
              <strong>Proyecto editado con exito!</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              `;
            document.getElementsByClassName('form')[0].prepend(alert);
            this.project = response.project;
            this.getProject(this.id);
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

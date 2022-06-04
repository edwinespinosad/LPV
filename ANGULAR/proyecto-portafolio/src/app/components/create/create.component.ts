import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public titulo: string;
  public project: Project;
  public save_proyecto;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _proyectoService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.titulo = "Crear Proyecto";
    this.project = new Project("", "", "", "", 2022, "");
    this.save_proyecto = "";
    this.status = "failed";
    this.filesToUpload = [];
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log("onSubmit");
    this._proyectoService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {

          // Subir la imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'imagen')
              .then((result: any) => {


                this.save_proyecto = result.project;

                this.status = 'success';
                form.reset();

                const alert = document.createElement('div');
                alert.classList.add('alert');
                alert.classList.add('alert-success');
                alert.classList.add('alert-dismissible')
                alert.classList.add('fade');
                alert.classList.add('show');
                
                alert.innerHTML = `
                <strong>Proyecto creado con exito!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                document.getElementsByClassName('form')[0].prepend(alert);

                form.reset();
              });
          } else {
            this.save_proyecto = response.project;
            this.status = 'success';
            form.reset();
            const alert = document.createElement('div');
            alert.classList.add('alert');
            alert.classList.add('alert-success');
            alert.classList.add('alert-dismissible')
            alert.classList.add('fade');
            alert.classList.add('show');
            alert.innerHTML = '<strong>Proyecto creado correctamente</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>';
            document.getElementsByClassName('form')[0].prepend(alert);
          }

        } else {
          this.status = 'failed';
          
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

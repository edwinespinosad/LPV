import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {CreateComponent} from './components/create/create.component';
import {ContactComponent} from './components/contact/contact.component';
import {PreviewComponent} from './components/preview/preview.component';
import { EditComponent} from './components/edit/edit.component';
// import { ErrorComponent } from './components/error/error.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'crear-proyecto', component: CreateComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyecto/:id', component: PreviewComponent },
  { path: 'editar-proyecto/:id', component: EditComponent },
  // { path: 'error', component: ErrorComponent },
  // { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

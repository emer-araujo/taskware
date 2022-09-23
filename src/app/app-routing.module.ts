import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsertTasksComponent } from './components/insert-tasks/insert-tasks.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { EditTasksComponent } from './components/edit-tasks/edit-tasks.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'insert', component: InsertTasksComponent},
  {path:'list', component: ListTasksComponent},
  {path:'edit/:id', component: EditTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

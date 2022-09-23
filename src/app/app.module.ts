import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { HomeComponent } from './components/home/home.component';
import { EditTasksComponent } from './components/edit-tasks/edit-tasks.component';
import { InsertTasksComponent } from './components/insert-tasks/insert-tasks.component';
import { StorageApiService } from './services/storage-api.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HomeComponent,
    EditTasksComponent,
    InsertTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StorageApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

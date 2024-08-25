import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TestComponentComponent } from './test-component/test-component.component';

// Define your application routes
const routes: Routes = [
  { path: 'test', component: TestComponentComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentFormComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/students', pathMatch: 'full' } // Wildcard route
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    TestComponentComponent
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,  // Required for Angular Material components
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,  // Import CommonModule
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

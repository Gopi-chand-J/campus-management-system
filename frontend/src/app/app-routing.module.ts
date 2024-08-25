import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TestComponentComponent } from './test-component/test-component.component'; // Import the TestComponent

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentFormComponent },
  { path: 'test', component: TestComponentComponent },  // Add TestComponent route
  { path: '', redirectTo: '/students', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/students', pathMatch: 'full' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
RouterModule.forRoot(routes, { enableTracing: true })


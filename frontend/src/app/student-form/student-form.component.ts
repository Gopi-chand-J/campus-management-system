import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: Student = { id: 0, name: '', email: '' };
  errorMessage: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit(studentForm: any): void {
    // Check if the form is valid before submitting
    if (studentForm.invalid) {
      this.errorMessage = 'Try again. All fields are required.';
      return;
    }

    this.studentService.addStudent(this.student).subscribe(
      () => this.router.navigate(['/students']),
      (error) => this.errorMessage = 'Could not add student. Please try again later.'
    );
  }
}

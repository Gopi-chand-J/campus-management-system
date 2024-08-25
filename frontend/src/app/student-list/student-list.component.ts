import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  errorMessage: string = '';
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<Student>(this.students);

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        this.dataSource.data = this.students;  // Update the data source for mat-table
      },
      (error) => this.errorMessage = 'Could not load students. Please try again later.'
    );
  }
}

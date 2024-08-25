package com.uwindsor.campusmanagement.service;

import com.uwindsor.campusmanagement.model.Student;
import com.uwindsor.campusmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Method to retrieve all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Method to create a new student
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    // Additional methods for other CRUD operations can be added here
}

package com.uwindsor.campusmanagement.repository;

import com.uwindsor.campusmanagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { StudentDTO } from './dto/students.dto';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentsService {
    
    
    constructor(@InjectRepository(Student) private studentRepository:StudentRepository){
        
    }
    saveStudents(studentDto: StudentDTO) {
       return this.studentRepository.save(studentDto);
    }

    getAllStudents() {
        return this.studentRepository.find();
    }

    getStudentBYId(id: number) {
        return this.studentRepository.findOne(id);
    }

    updateStudent(id: number, studentDto: StudentDTO) {
        return this.studentRepository.update(id,studentDto);
    }

    deleteStudent(id: number) {
        return this.studentRepository.delete(id);
    }
    
    
}

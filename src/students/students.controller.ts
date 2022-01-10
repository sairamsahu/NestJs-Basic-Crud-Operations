import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { StudentDTO } from './dto/students.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

    constructor(private studentService:StudentsService){

    }

    @Post()
    saveStudents(@Body() studentDto:StudentDTO){
       return this.studentService.saveStudents(studentDto);
    }

    @Get()
    getAllStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(":id")
    getStudentBYId(@Param('id') id:number){
        return this.studentService.getStudentBYId(id);
    }

    @Put(":id")
    updateStudent(@Param('id') id:number, @Body()studentDto:StudentDTO){
        return this.studentService.updateStudent(id,studentDto)
    }

    @Delete(":id")
    deleteStudent(@Param('id') id:number){
         return this.studentService.deleteStudent(id);
    }

}

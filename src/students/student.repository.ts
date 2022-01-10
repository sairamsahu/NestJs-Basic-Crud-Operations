import { Student } from "src/entity/student.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository()
export class StudentRepository extends Repository<Student>{
    
}
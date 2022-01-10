import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student{


    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    studentName:string;

    @Column()
    studentId:string;

    @Column()
    studentBranch:string;
}
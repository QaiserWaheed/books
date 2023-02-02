import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()


export class createBook{



@PrimaryGeneratedColumn()
id : number
@Column()
@ApiProperty()
BookName : String
@Column()
@ApiProperty()
Author: String
@ApiProperty()
@Column()
BookPrice : number

}



 
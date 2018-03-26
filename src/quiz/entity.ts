import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";




@Entity()
export default class Quiz extends BaseEntity {


  @PrimaryGeneratedColumn()
  id?: number;

  @Column("text", { nullable: false })
  title: string;

}

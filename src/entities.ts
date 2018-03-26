import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'

@Entity()
export class Answers extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('number', { nullable: true })
  questionId: number

  @Column('boolean', {nullable: true})
  correct: boolean

  @Column('text', { nullable: true})
  text: string

}

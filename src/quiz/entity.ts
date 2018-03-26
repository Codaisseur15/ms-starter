import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsNumber, IsBoolean } from 'class-validator'

@Entity()
export class Quiz extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column('text', { nullable: false })
  title: string;

  @OneToMany(_ => Question, question => question.quiz, {eager:true})
  question: Question[]

}

@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  text: string

  @IsString()
  @Column('text', {nullable:false})
  type: string

  @ManyToOne(_ => Quiz, quiz => quiz.question)
  quiz: Quiz

  @OneToMany(_ => Answer, answer => answer.question, {eager:true})
  answer: Answer[]

}

@Entity()
export class Answer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsBoolean()
  @Column('boolean', {nullable: true})
  correct: boolean

  @IsString()
  @Column('text', { nullable: true})
  text: string

  @ManyToOne(_ => Question, question => question.answer)
  question: Question

}

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { Food } from './Food';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Customer, {
    eager: true,
    cascade: true,
  })
  customer: Customer;

  @ManyToMany(type => Food, food => food.orders, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  foods: Food[];

  @Column()
  time: string;
}
